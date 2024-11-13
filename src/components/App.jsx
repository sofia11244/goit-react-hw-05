// import { useState } from 'react'
// import css from'./comp-style/App.module.css'
import axios from 'axios';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation} from "react-router-dom";
import Home from '../pages/HomePage.jsx';
import MovieDetailsPage from '../pages/MovieDetailsPage.jsx';
import MoviesPage from '../pages/MoviesPage.jsx';
import NotFound from '../pages/NotFoundPage.jsx';
import Navigation from '../components/Navigation.jsx';

const LazyMovieCast = lazy(() => import('../components/MovieCast.jsx'));
const LazyMovieList = lazy(() => import('../components/MovieList.jsx'));
const LazyMovieReview = lazy(() => import('../components/MovieReviews.jsx'));


function App() {
  const location = useLocation();
  useEffect(() => {
    console.log('Page changed to:', location.pathname);
  }, [location]);


  const [films, setFilms] = useState([]);

  const fetchFilms = async () => {
    try{
      const response= await axios.get('https://api.themoviedb.org/3/movie/popular',{
        params: {
          api_key: import.meta.env.VITE_REACT_APP_API_KEY,
        }
      });
      const data = response.data.results;
      console.log(response.data);
      setFilms(data);
    } catch(error){
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);






  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}> 
        <Routes>
          <Route path="/" element={<><Home /><LazyMovieList films={films}/></>}/>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          
          <Route path="/movies/:movieId">
            <Route path="cast" element={<LazyMovieCast />} />
            <Route path="review" element={<LazyMovieReview />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

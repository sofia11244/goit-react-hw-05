// import { useState } from 'react'
// import css from'./comp-style/App.module.css'
import axios from 'axios';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import Home from '../pages/HomePage.jsx';
import MovieDetailsPage from '../pages/MovieDetailsPage.jsx';
import MoviesPage from '../pages/MoviesPage.jsx';
import NotFound from '../pages/NotFoundPage.jsx';
import Navigation from '../components/Navigation.jsx';

const LazyMovieList = lazy(() => import('../components/MovieList.jsx'));
const LazyMovieCast = lazy(() => import('../components/MovieCast.jsx'));
const LazyMovieReview = lazy(() => import('../components/MovieReviews.jsx'));


function App() {
  const location = useLocation();
  useEffect(() => {
  }, [location]);


  const [films, setFilms] = useState([]);

  const fetchFilms = async () => {
    try{
      const response= await axios.get('https://api.themoviedb.org/3/movie/popular',{
        params: {
          api_key: import.meta.env.VITE_REACT_APP_API_KEY,
        }
      }); 

      //NEEDED TO FECTH API AGAIN BCUZ CAST DECIDED TO NOT SHOW 
      //WHO DID NOT PAY THE BILLS FOR THE API


      const filmsWithCast = await Promise.all(
        response.data.results.map(async (movie) => {
          const castResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
            {
              params: {
                api_key: import.meta.env.VITE_REACT_APP_API_KEY,
              },
            }
          );
          return { //to merge both film and cast
            ...movie,
            cast: castResponse.data.cast.slice(0, 5),
          };
        })
      );
      setFilms(filmsWithCast); //upload to state 
    } catch (error) {
      console.log("Error fetching films:", error);
      toast.error('Something went wrong. Please try again.');
    }
  };
  
  const fetchSearchFilms = async (searchQuery = '') => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: import.meta.env.VITE_REACT_APP_API_KEY,
          query: searchQuery,
        }
      });
      setFilms(response.data.results);
    } catch (error) {
      console.log("Error fetching search results:", error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  // useEffect(() => {
  //   fetchFilms();
  // }, []);


  useEffect(() => {
    if (location.pathname === '/') {
      fetchFilms();
    }
  }, [location]);




  return (
    <div>
      <Navigation />
      <Toaster />
      <Suspense fallback={<div>Loading...</div>}> 
        <Routes>
          <Route path="/" element={<><Home /><LazyMovieList films={films}/></>}/>
          <Route path="/movies" element={<MoviesPage fetchSearchFilms={fetchSearchFilms} films={films} />} /> 
          <Route path="/movies/:movieId"  element={<MovieDetailsPage />} >
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

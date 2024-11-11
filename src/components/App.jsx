// import { useState } from 'react'
// import css from'./comp-style/App.module.css'
import { Suspense, lazy } from 'react';
import { Routes, Route,} from "react-router-dom";
import Home from '../pages/HomePage.jsx';
import MovieDetailsPage from '../pages/MovieDetailsPage.jsx';
import MoviesPage from '../pages/MoviesPage.jsx';
import NotFound from '../pages/NotFoundPage.jsx';
import Navigation from '../components/Navigation.jsx';

const LazyMovieCast = lazy(() => import('../components/MovieCast.jsx'));
const LazyMovieList = lazy(() => import('../components/MovieList.jsx'));
const LazyMovieReview = lazy(() => import('../components/MovieReviews.jsx'));


function App() {

  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          
          <Route>
            <Route path="/movies/:movieId/cast" element={<LazyMovieCast />} />
            <Route path="/movies/:movieId/review" element={<LazyMovieReview />} />
            <Route path="/movies/:movieId/list" element={<LazyMovieList />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

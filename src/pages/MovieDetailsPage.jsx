import { useLocation, Link, Outlet } from 'react-router-dom';
import { Suspense} from 'react';


function MovieDetailsPage() {
  const location = useLocation();
  const { film } = location.state; // Access the passed movie data

  return (
    <div>
      {film ? (
        <div>
          <h3>{film.title}</h3>
          
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title}
          />
          
        <nav>
            <Link to="review" state={{ film }}>Overview</Link><br/>           
            <Link to="cast" state={{ film }}>Cast</Link>
        </nav>
          
          <Suspense fallback={<p>Loading the section...</p>}>
            <Outlet /> {/* Displays nested components (review or cast) */}
          </Suspense>
        </div>
      ) : (
        <p>Couldn&apos;t find the movie.</p>
      )}
    </div>
  );
}

export default MovieDetailsPage;

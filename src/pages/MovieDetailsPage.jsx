import { useLocation, Link, Outlet } from 'react-router-dom';
import { Suspense, useEffect, useRef} from 'react';
import style from './page-style/MovieDetailsPage.module.css';


function MovieDetailsPage() {
  const location = useLocation();
  const { film } = location.state;
  const outletRef = useRef(null);

  useEffect(() => {

    if (outletRef.current) {
      outletRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  
  return (
    <div className={style.container}>
      {film ? (
        <div>
          <h3>{film.title}</h3>
          
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title}
          />
          
          <nav className={style.nav}>
              <Link className={style.navOverview} to="review" state={{ film }}><h4>Overview</h4></Link><br/>           
              <Link className={style.navCast}to="cast" state={{ film }}><h4>Cast</h4></Link>
          </nav>
          
          <Suspense fallback={<p>Loading the section...</p>}>
          <div ref={outletRef}>
          <Outlet /> 

          </div>
          </Suspense>
        </div>
      ) : (
        <p>Couldn&apos;t find the movie.</p>
      )}
    </div>
  );
}

export default MovieDetailsPage;


import PropTypes from 'prop-types'; 
import style from './comp-style/MovieList.module.css'
import { Link } from 'react-router-dom';

function MovieList({ films }) {
  return (
    <ul className={style.list}>
      
      {films.length > 0 ? (
        films.map((film) => (
          
          <li key={film.id}>
            <h3 className={style.listTitle}>{film.title}</h3>
            
            <Link to={`/movies/${film.id}`} state={{ film }}>

            <div className={style.listImgItem}>
            <img className={style.listImg}
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              />
            </div>
              
              
            </Link>
          </li>
        ))
      ) : (
        <p>Couldn&apos;t find the movie.</p>
      )}
    </ul>
  );
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;

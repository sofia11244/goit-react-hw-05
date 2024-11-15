// MovieList
// import propTypes from 'prop-types';
import style from './comp-style/MovieCast.module.css'
import { useLocation } from 'react-router-dom';

function MovieCast() {
    const location = useLocation();
  const { film } = location.state;

    return (
        <div>
          {film.cast ? (
            <ul className={style.castList}>
              {film.cast.map((actor) => (
                <li key={actor.id}>
                  <p>{actor.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Couldn&apos;t find the cast data.</p>
          )}
        </div>
    )
}

export default MovieCast;

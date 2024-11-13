// MovieList
// import propTypes from 'prop-types';
// import style from './comp-style/MovieCast.module.css'
import { useLocation } from 'react-router-dom';

function MovieCast() {
    const location = useLocation();
  const { film } = location.state;

    return (
        <div>
        <div> 
          <h4>Cast:</h4>
          {film.cast ? (
            <ul>
              {film.cast.map((actor) => (
                <li key={actor.id}>
                  <p>{actor.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Yükleniyor...</p>
          )}
        </div>
        </div>
    )
}

export default MovieCast;

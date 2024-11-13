import PropTypes from 'prop-types'; // Büyük 'P' ile PropTypes'i import ediyoruz
// import style from './comp-style/MovieList.module.css'

function MovieList({ films }) {
    return (
      <ul>
        {films.length > 0 ? (
          films.map((film) => (
            <li key={film.id}>
              <h3>{film.title}</h3>
              <p>{film.overview}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              />
              
              {/* Cast bilgilerini göster */}
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
            </li>
          ))
        ) : (
          <p>Yükleniyor...</p>
        )}
      </ul>
    );
  }
  
  MovieList.propTypes = {
    films: PropTypes.array.isRequired,
  };
  
  export default MovieList;
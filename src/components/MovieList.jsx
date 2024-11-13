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
              src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
              alt={film.title}
            /> 
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

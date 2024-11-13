import PropTypes from 'prop-types'; 
// import style from './comp-style/MovieList.module.css'
import { Link } from 'react-router-dom';

function MovieList({ films }) {
  return (
    <ul>
      
      {films.length > 0 ? (
        films.map((film) => (
          
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ film }}>
            <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              />
              <h3>{film.title}</h3>
              
            </Link>
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
// const [error, setError] = useState(null);

// useEffect(() => {
//   axios
//     .get(url, options)
//     .then((response) => {
//       setFilms(response.data.results);
//     })
//     .catch((err) => setError('Error fetching films'));
// }, []);
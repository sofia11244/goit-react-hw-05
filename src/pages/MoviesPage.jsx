import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = ({ films, fetchSearchFilms }) => {
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === '') return; // Prevent empty search
    setHasSearched(true);
    fetchSearchFilms(query);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {hasSearched ? (
          films.length > 0 ? (
            films.map((film) => (
              <li key={film.id}>
                <Link to={`/movies/${film.id}`} state={{ film }}>
                  <h3>{film.title}</h3>
                </Link>
              </li>
            ))
          ) : (
            <p>No movies found. Try searching for something else.</p>
            
          )
        ) : (
          <p>Search for a movie to see results.</p>
        )}
      </ul>
    </div>
  );
};

MoviesPage.propTypes = {
  films: PropTypes.array.isRequired,
  fetchSearchFilms: PropTypes.func.isRequired,
};

export default MoviesPage;

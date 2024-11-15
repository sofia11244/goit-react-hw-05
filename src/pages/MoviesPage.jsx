import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './page-style/MoviesPage.module.css';
import { toast } from 'react-hot-toast';

const MoviesPage = ({ films, fetchSearchFilms }) => {
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [showedNoMoviesToast, setShowedNoMoviesToast] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a movie name to search!', {
        position: 'top-center',
        duration: 3000,
      });
      return; 
    }
    setHasSearched(true);
    setShowedNoMoviesToast(false); 
    fetchSearchFilms(query);
  };


  useEffect(() => {
    if (hasSearched && films.length === 0 && !showedNoMoviesToast) {
      toast.error('No movies found. Try searching for something else.', {
        position: 'top-center',
        duration: 3000,
      });
      setShowedNoMoviesToast(true); 
    }
  }, [hasSearched, films, showedNoMoviesToast]);

  return (
    
    <div>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <form onSubmit={handleSearch} className={style.inputItem}>
        <input
          className={style.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button className={style.button} type="submit">Search</button>
      </form>

      <ul className={style.list}>
        {hasSearched ? (
          films.length > 0 ? (
            films.map((film) => (
              <li key={film.id} className={style.listItem}>
                <Link to={`/movies/${film.id}`} state={{ film }}>
                <h3 className={style.listTitle}>{film.title}</h3>

                <img className={style.img}
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              />
                </Link>
              </li>
            ))
          ) : (
            <p></p>
          )
        ) : (
          <p className={style.inputText}>Search for a movie to see results.</p>
        )}
      </ul>
    </div>
    </div>
  );
};

MoviesPage.propTypes = {
  films: PropTypes.array.isRequired,
  fetchSearchFilms: PropTypes.func.isRequired,
};

export default MoviesPage;
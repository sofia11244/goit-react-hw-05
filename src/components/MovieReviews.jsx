// import propTypes from 'prop-types';
import style from './comp-style/MovieReviews.module.css'
import { useLocation } from 'react-router-dom';


function MovieReview() {
    
 const location = useLocation();
 const { film } = location.state;

    return (
        <div>
            {film ? (
            <div> 
            <p className={style.overview}>{film.overview}</p>
            </div>
      ) : (
        <p>Film verisi bulunamadı.</p>
      )}
        </div>
    )
}

export default MovieReview;

// MovieReview.protoTypes = {}

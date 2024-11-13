// import propTypes from 'prop-types';
// import style from './comp-style/MovieReview.module.css'
import { useParams } from 'react-router-dom';

function MovieReview() {
    const { MovieReviewId } = useParams(); 
    return (
        <div>
            <h1>MovieReview</h1>
            <p>Now showing product with id - {MovieReviewId}</p>
        </div>
    )
}

export default MovieReview;

// MovieReview.protoTypes = {}
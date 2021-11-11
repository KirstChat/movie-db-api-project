import './MovieItem.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import voteAverageColor from '../Utils';

const MovieItem = ({
  movie: { id, title, poster_path, vote_average, vote_count },
}) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className='card'>
      <Link to={`/movie/${id}`}>
        <img
          className='card__img'
          src={
            poster_path
              ? IMG_PATH + poster_path
              : 'https://via.placeholder.com/280x420?text=No+Image+Found'
          }
          alt={title + ' Poster'}
        />
      </Link>
      {voteAverageColor(vote_average, vote_count)}
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;

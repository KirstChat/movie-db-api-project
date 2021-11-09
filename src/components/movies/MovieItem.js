import './MovieItem.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieItem = ({
  movie: { id, title, poster_path, vote_average, vote_count },
}) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

  const voteAverageColor = () => {
    if (vote_count === 0) {
      return <span className='average'>-</span>;
    } else if (vote_average <= 4.9) {
      return <span className='average average-red'>{vote_average * 10}%</span>;
    } else if (vote_average <= 6.9) {
      return (
        <span className='average average-orange'>{vote_average * 10}%</span>
      );
    } else {
      return (
        <span className='average average-green'>{vote_average * 10}%</span>
      );
    }
  };

  return (
    <div className='card'>
      <Link to={`/movie/${id}`}>
        <img
          className='card__img'
          src={IMG_PATH + poster_path}
          alt={title + ' Poster'}
        />
      </Link>
      {voteAverageColor()}
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;

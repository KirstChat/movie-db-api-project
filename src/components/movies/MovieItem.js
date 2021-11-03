import './MovieItem.css';
import PropTypes from 'prop-types';

const MovieItem = ({ movie: { title, poster_path, vote_average } }) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

  const voteAverageColor = () => {
    if (vote_average <= 4.9) {
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
      <img
        className='card__img'
        src={IMG_PATH + poster_path}
        alt={title + ' Poster'}
      />
      {voteAverageColor()}
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;

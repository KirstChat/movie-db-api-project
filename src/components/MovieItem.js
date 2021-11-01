import './MovieItem.css';
import PropTypes from 'prop-types';

const MovieItem = ({ movie: { title, poster_path, vote_average } }) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w300';

  const voteAverageColor = () => {
    if (vote_average <= 5) {
      return <span className='average vote-red'>{vote_average}</span>;
    } else if (vote_average <= 7.5) {
      return <span className='average vote-orange'>{vote_average}</span>;
    } else {
      return <span className='average vote-green'>{vote_average}</span>;
    }
  };

  return (
    <div className='card'>
      <img src={IMG_PATH + poster_path} alt={title + ' Poster'} />
      {voteAverageColor()}
      {/* <span className='average vote-red'>{vote_average}</span> */}
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;

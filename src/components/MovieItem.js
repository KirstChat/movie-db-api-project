import './MovieItem.css';
import PropTypes from 'prop-types';

const MovieItem = ({ movie: { title, poster_path, vote_average } }) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w200';
  return (
    <div className='card'>
      <img src={IMG_PATH + poster_path} alt={title + ' Poster'} />
      <h4>{title}</h4>
      <p>{vote_average}</p>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;

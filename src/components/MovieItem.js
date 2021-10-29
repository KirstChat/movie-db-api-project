import PropTypes from 'prop-types';

const MovieItem = ({ movie: { title, poster_path, release_date } }) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w200';
  return (
    <div>
      <img src={IMG_PATH + poster_path} alt={title + ' Poster'} />
      <h3>{title}</h3>
      <p>Released: {release_date}</p>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;

import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;

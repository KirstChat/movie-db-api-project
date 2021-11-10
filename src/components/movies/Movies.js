import './Movies.css';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const Movies = ({ movies, error }) => {
  return (
    <main>
      {!error ? (
        <div className='cards'>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='error'>{error}</div>
      )}
    </main>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;

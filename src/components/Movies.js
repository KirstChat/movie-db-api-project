import './Movies.css';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const Movies = ({ movies, error }) => {
  return (
    <main className='container'>
      <h3>Top 20 Trending Movies</h3>
      {!error ? (
        <div className='container__cards'>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='error-message'>{error}</div>
      )}
    </main>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;

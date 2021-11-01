import './Movies.css';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  return (
    <main className='container'>
      <h3>Top 20 Trending Movies</h3>
      <div className='container__cards'>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;

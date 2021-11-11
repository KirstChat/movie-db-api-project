import './Movies.css';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  return (
    <main>
      <div className='cards'>
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

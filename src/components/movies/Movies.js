import React from 'react';
import './Movies.css';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';
import SearchFilters from './SearchFilters';

const Movies = ({ movies, error, filterMovies}) => {
  return (
    <main className='container'>
      <SearchFilters filterMovies={filterMovies}/>
      {!error ? (
        <div className='container__cards'>
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

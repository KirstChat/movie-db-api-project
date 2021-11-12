import React from 'react';
import './Movies.css'
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';
import SearchFilters from '../search/SearchFilters';

const Movies = ({ movies, filterMovies }) => {
  return (
    <div className='wrapper'>
      <div className='filters'>
        <SearchFilters filterMovies={filterMovies}/>
      </div>
      <div className='cards'>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;

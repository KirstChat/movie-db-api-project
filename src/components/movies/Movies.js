import React from 'react';
import './Movies.css';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';
import SearchFilters from './SearchFilters';

const Movies = ({ movies, filterMovies}) => {
  return (
    <main className='container'>
      <div className="filters">
      <SearchFilters filterMovies={filterMovies}/>
      </div>
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

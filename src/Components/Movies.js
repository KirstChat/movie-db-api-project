import React from 'react';
import MovieItem from './MovieItem'
import './Movies.css'

const Movies = ({ movies }) => {
  
  return (
  <div className="container">
    <h2>Popular Movies</h2>
    <div className="movie-container">
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
  )
}
export default Movies;
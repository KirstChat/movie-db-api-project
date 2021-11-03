import React from 'react'
import './MovieItem.css';

const MovieItem = props => {
  const {title, original_name, poster_path, overview, vote_average} = props.movie;
  const prefix='https://image.tmdb.org/t/p/w500';
  return (
    <div className="movie-card">
      <img 
        className="movie-img"
        src={`${prefix}${poster_path}`} 
        alt={`poster for ${title}`}
      />
      <div className="details">
      <div className="rating">
          {`${vote_average*10}%`}
        </div> 
        {title ?
        <h4 className="movie-title">
          {title}
        </h4> :
        <h4>{original_name}</h4>
        }
      </div>
      <div className="description">
        <p className="movie-overview">
          {overview}
        </p>
      </div>    
    </div>
  )
}
export default MovieItem;
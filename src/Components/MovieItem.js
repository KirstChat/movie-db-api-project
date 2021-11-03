import React from 'react'
import './MovieItem.css';

const MovieItem = props => {
  const {title, original_name, poster_path, vote_average} = props.movie;
  const prefix='https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-card">
     <div className="img-container">
      <img 
          className="movie-img"
          src={`${prefix}${poster_path}`} 
          alt={title ? `poster for ${title}`
          : `poster for ${original_name}`}
        />
     </div>
      <div className="details">
        <div className="rating">
            {`${vote_average*10}%`}
          </div> 
          {title ?
          <h4 className="movie-title">
            {title}
          </h4> :
          <h4 className="movie-title">{original_name}</h4>
          }
        </div>   
    </div>
  )
}
export default MovieItem;
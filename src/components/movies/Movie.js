import { useEffect } from 'react';

const Movie = ({ movie, getMovieDetails, match }) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieDetails(match.params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <div class='container'>
      <div className='container__details'>
        <img
          className='card__img'
          src={IMG_PATH + movie.poster_path}
          alt={movie.title + ' Poster'}
        />
        <div className='details'>
          <h1>
            {movie.title} <span>{`(${movie.release_date.slice(0, 4)})`}</span>
          </h1>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

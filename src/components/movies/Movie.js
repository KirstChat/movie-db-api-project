import './Movie.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import voteAverageColor from '../Utils';
import PropTypes from 'prop-types';

const Movie = ({ movie, getMovieDetails, cast, getCast, match }) => {
  useEffect(() => {
    getMovieDetails(match.params.id);
    getCast(match.params.id);
    // eslint-disable-next-line
  }, []);

  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

  const topBilledCast = cast.slice(0, 6);

  return (
    <div className='container'>
      <Link to='/' className='btn-gradient btn-back'>
        &larr; Back
      </Link>
      <div className='container__movie-details'>
        <img
          className='movie-details__img'
          src={
            movie.poster_path
              ? IMG_PATH + movie.poster_path
              : 'https://via.placeholder.com/280x420?text=No+Image+Found'
          }
          alt={movie.title + ' Poster'}
        />
        <div className='movie-details'>
          <h2>{movie.title}</h2>
          <h4>Overview:</h4>
          <p>{movie.overview}</p>
          <h4>Released:</h4>
          <p>{movie.release_date}</p>
          <h4>Runtime:</h4>
          <p>{movie.runtime} Minutes</p>
          <div className='movie-average'>
            <h4>User Score</h4>
            {voteAverageColor(movie.vote_average, movie.vote_count)}
          </div>
        </div>
      </div>

      <div className='container__cast-details'>
        <h2>Top Billed Cast</h2>
        <div className='cast-details'>
          {topBilledCast.map((cast) => (
            <div key={cast.id} cast={cast}>
              <img
                className='cast-details__img'
                src={
                  cast.profile_path
                    ? IMG_PATH + cast.profile_path
                    : 'https://via.placeholder.com/280x420?text=No+Image+Found'
                }
                alt={'Photo of ' + cast.name}
              />
              <div className='cast-details__text'>
                <h4>{cast.name}</h4>
                <p>{cast.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovieDetails: PropTypes.func.isRequired,
  cast: PropTypes.array.isRequired,
  getCast: PropTypes.func.isRequired,
};

export default Movie;

const MovieItem = ({ movie: { title, poster_path, release_date } }) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <img src={IMG_PATH + poster_path} alt={title + ' Poster'} />
      <h3>{title}</h3>
      <p>{release_date}</p>
    </div>
  );
};

export default MovieItem;

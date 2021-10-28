import MovieItem from './MovieItem';

const Movies = ({ movies }) => {
  // const movies = [
  //   {
  //     id: '438631',
  //     title: 'Dune',
  //     poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
  //     release_date: '2021-09-15',
  //   },
  // ];
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;

import MovieItem from '../movies/MovieItem';

const SearchResults = ({ searchResults }) => {
  return (
    <main>
      <div className='cards'>
        {searchResults.map((result) => (
          <MovieItem key={result.id} movie={result} />
        ))}
      </div>
    </main>
  );
};

export default SearchResults;

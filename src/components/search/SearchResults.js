import MovieItem from '../movies/MovieItem';
import PropTypes from 'prop-types';

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

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

export default SearchResults;

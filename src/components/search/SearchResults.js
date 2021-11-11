import MovieItem from '../movies/MovieItem';
import PropTypes from 'prop-types';

const SearchResults = ({ searchResults }) => {
  return (
    <div className='cards'>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <MovieItem key={result.id} movie={result} />
        ))
      ) : (
        <h3 className='search__error'>
          We couldn't find any movies with that name.
        </h3>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

export default SearchResults;

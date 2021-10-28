import PropTypes from 'prop-types';

const SearchBar = ({ icon, title }) => {
  return (
    <nav>
      <h1>
        <i className={icon} /> {title}
      </h1>

      <form>
        <input type='text' name='text' placeholder='Search Movies...' />
        <input type='submit' />
      </form>
    </nav>
  );
};

SearchBar.defaultProps = {
  title: 'The Movie Database',
  icon: 'fas fa-film',
};

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SearchBar;

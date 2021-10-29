import Search from './Search';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav>
      <h1>
        <i className={icon} /> {title}
      </h1>

      <Search />
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'The Movie Database',
  icon: 'fas fa-film',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;

import Search from './Search';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <header className='heading'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <nav>
        <Search />
      </nav>
    </header>
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

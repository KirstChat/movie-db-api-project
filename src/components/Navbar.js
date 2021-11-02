import './Navbar.css';
import Search from './Search';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  const searchMovies = (text) => {
    console.log(text);
  };

  return (
    <header className='heading'>
      <h1 className='heading__title'>
        <i className={icon} /> {title}
      </h1>
      <nav className='heading__navbar'>
        <Search searchMovies={searchMovies} />
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

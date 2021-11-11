import './Navbar.css';
import axios from 'axios';
import Search from '../search/Search';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title, setMovies }) => {
  const searchMovies = async (text) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${text}`
    );
    setMovies(res.data.results);
  };

  return (
    <header className='navbar'>
      <Link to='/'>
        <h1 className='navbar__heading'>
          <i className={icon} /> {title}
        </h1>
      </Link>
      <Search searchMovies={searchMovies} />
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

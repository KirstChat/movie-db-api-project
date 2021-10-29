import './Footer.css';
import logo from '../img/tmdb-logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='https://developers.themoviedb.org/3'>
        <img src={logo} alt='' />
      </a>
    </footer>
  );
};

export default Footer;

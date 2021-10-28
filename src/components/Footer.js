import logo from '../img/tmdb-logo.svg';

const Footer = () => {
  return (
    <div>
      <p>
        Data from{' '}
        <a href='https://developers.themoviedb.org/3'>The Movie Database API</a>
      </p>
      <img src={logo} alt='' />
    </div>
  );
};

export default Footer;

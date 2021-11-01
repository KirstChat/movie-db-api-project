import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Footer from './components/Footer';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`
        );
        setMovies(res.data.results);
      } catch (err) {
        setError(err.message);
      }
    };
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <Navbar />
      <Movies movies={movies} error={error} />
      <Footer />
    </div>
  );
};

export default App;

import SearchBar from './components/SearchBar';
import Movies from './components/Movies';
import Footer from './components/Footer';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`
      );
      setMovies(res.data.results);
    };
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <SearchBar />
      <Movies movies={movies} />
      <Footer />
    </div>
  );
};

export default App;

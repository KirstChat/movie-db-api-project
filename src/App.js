import React from 'react';
import Navbar from './Components/layout/Navbar';
import Movies from './Components/movies/Movies';
import SearchFilters from './Components/movies/SearchFilters';
import Footer from './Components/layout/Footer';
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
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setMovies(res.data.results);
      } catch (err) {
        setError(`Oh no! Something went wrong: ${err.message}`);
      }
    };
    getMovies();
  }, []);


  return (
    <div className='App'>
      <Navbar setMovies={setMovies} />
      <div className='content'>
        <SearchFilters />
        <Movies movies={movies} error={error} />
      </div>
      <Footer />
    </div>
  );
};

export default App;

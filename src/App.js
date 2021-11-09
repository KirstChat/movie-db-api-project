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

  const searchMovieGenres = async (genreStr) => {
    const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&&page=1&with_genres=${genreStr}`
      );
      setMovies(res.data.results);
      console.log(genreStr);
    }


  return (
    <div className='App'>
      <Navbar setMovies={setMovies} />
      <div className='content'>
        <SearchFilters searchMovieGenres={searchMovieGenres}/>
        <Movies movies={movies} error={error} />
      </div>
      <Footer />
    </div>
  );
};

export default App;

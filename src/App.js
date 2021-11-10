import React from 'react';
import Navbar from './components/layout/Navbar';
import Movies from './components/movies/Movies';
import SearchFilters from './components/movies/SearchFilters';
import Footer from './components/layout/Footer';
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

  const searchMovieGenres = async (genreStr, providerStr,certificationStr) => {
    const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&&page=1&with_genres=${genreStr}&watch_region=GB&with_watch_providers=${providerStr}&certification=${certificationStr}`
      );
      setMovies(res.data.results);
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

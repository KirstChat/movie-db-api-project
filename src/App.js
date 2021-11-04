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

  const genreOptions =[
    {label:"Action", value:"Action"},{label:"Adventure", value:"Adventure"},
    {label:"Animation", value:"Animation"},{label:"Comedy", value:"Comedy"},
    {label:"Crime", value:"Crime"},{label:"Documentary", value:"Documentary"},
    {label:"Drama", value:"Drama"}, {label:"Family", value:"Family"},
    {label:"Fantasy", value:"Fantasy"},{label:"History", value:"History"},
    {label:"Horror", value:"Horror"},{label:"Music", value:"Music"},
    {label:"Mystery", valuee:"Mystery"},{label:"Romance", value:"Romance"},
    {label:"Science Fiction", value:"Science Fiction"},
    {label:"TV Movie", value:"TV Movie"},{label:"Thriller", value:"Thriller"},
    {label:"War", value:"War"},{label:"Western", value:"Western"}
  ]

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
        <SearchFilters genreOptions={genreOptions}/>
        <Movies movies={movies} error={error} />
      </div>
      <Footer />
    </div>
  );
};

export default App;

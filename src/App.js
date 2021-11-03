import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Movies from './Components/Movies';
import './App.css';

const App = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
  const getMovies = async() => {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
    
    setMovies(res.data.results);
  }
  getMovies();
}, [])

const getContent = async searchValue => {
  const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}&language=en-US&page=1&include_adult=false`)
  setMovies(res.data.results);
}

console.log(movies)



  return (
    <div>
      <Header getContent={getContent}/>
       <Movies movies={movies} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
console.log(movies)

  return (
    <div>
      
    </div>
  );
}

export default App;

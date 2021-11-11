import React from 'react';
import Navbar from './components/layout/Navbar';
import Movies from './components/movies/Movies';
import Movie from './components/movies/Movie';
import SearchResults from './components/search/SearchResults';
import Footer from './components/layout/Footer';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Set Top 20 Trending Movies on Load
  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setMovies(res.data.results);
    };
    getMovies();
  }, []);

  // Get Movie Details
  const getMovieDetails = async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setMovie(res.data);
  };

  // Get Cast Details
  const getCast = async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setCast(res.data.cast);
  };

  // Filter Movie
  const filterMovies = async (genreStr, providerStr, certificationStr) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&&page=1&with_genres=${genreStr}&watch_region=GB&with_watch_providers=${providerStr}&certification=${certificationStr}`
    );

    setMovies(res.data.results);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar setSearchResults={setSearchResults} />
        <main className='content'>
          <Switch>
            <Route exact path='/'>
            <Movies movies={movies} filterMovies={filterMovies} />
            </Route>
            <Route
              exact
              path='/search'
              render={(props) => (
                <SearchResults {...props} searchResults={searchResults} />
              )}
            />
            <Route
              exact
              path='/movie/:id'
              render={(props) => (
                <Movie
                  {...props}
                  movie={movie}
                  cast={cast}
                  getMovieDetails={getMovieDetails}
                  getCast={getCast}
                />
              )}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

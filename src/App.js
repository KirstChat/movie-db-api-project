import Navbar from './components/layout/Navbar';
import Movies from './components/movies/Movies';
import Movie from './components/movies/Movie';
import Footer from './components/layout/Footer';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setMovies(res.data.results);
      } catch (err) {
        setError(`Oh no! Something went wrong: ${err.message}`);
      }
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

  return (
    <Router>
      <div className='App'>
        <Navbar setMovies={setMovies} />
        <main className='content'>
          <Switch>
            <Route exact path='/'>
              <Movies movies={movies} error={error} />
            </Route>
            <Route
              exact
              path='/movie/:id'
              render={(props) => (
                <Movie
                  {...props}
                  movie={movie}
                  getMovieDetails={getMovieDetails}
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

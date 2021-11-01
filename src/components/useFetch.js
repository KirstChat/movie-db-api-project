import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(url);
        setMovies(res.data.results);
      } catch (err) {
        setError(err.message);
      }
    };
    getMovies();
  }, [url]);

  return { movies, error };
};

export default useFetch;

import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';
import './GenreFilters.css'

const GenreFilter = ({setGenre}) => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const getGenreList = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        setGenreList(res.data.genres);
    }
    getGenreList();
  }, [])

  let genreStr='';

  const options= genreList.map(option => (
    {
      "value": option.id,
      "label": option.name
      }
  ))

  return (
      <Select className="select-options"
        isMulti
        isSearchable  
        autofocus
        onChange={setGenre} 
        options={options} 
      />
  )
}
export default GenreFilter;
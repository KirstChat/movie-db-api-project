import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './Form';

const Header = () => {
  const [content, setContent] = useState([])
const getContent = async searchValue => {
      const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}&language=en-US&page=1&include_adult=false`)
      setContent(res.data.results);
    }
    console.log(content);
  return (
    <div>
      <h1>The Movie Database</h1>
      <Form getContent={getContent}/>
    </div>
  )
}
export default Header;

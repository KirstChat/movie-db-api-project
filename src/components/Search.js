import './Search.css';
import { useState } from 'react';

const Search = ({ searchMovies }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(text);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search Movies...'
          onChange={onChange}
        />
        <input type='submit' value='Search' className='btn-gradient' />
      </form>
    </div>
  );
};

export default Search;

import './Search.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchMovies }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchMovies(text);
    setText('');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='search'>
      <form className='search__form' onSubmit={onSubmit}>
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

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Search;

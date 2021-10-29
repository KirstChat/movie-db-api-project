import './Search.css';
// import { useState } from 'react';

const Search = () => {
  // const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='text' placeholder='Search Movies...' />
        <input type='submit' value='Search' className='btn' />
      </form>
    </div>
  );
};

export default Search;

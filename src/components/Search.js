// import { useState } from 'react';

const Search = () => {
  // const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='text' placeholder='Search Movies...' />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Search;

import React, { useState } from 'react'

const Form = props => {
  const [searchValue, setSearchValue] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    if(searchValue === '') {
      alert('Please enter a search value')
    } else {
      props.getContent(searchValue)
    }
  }

  const onChange = (e) => {
    setSearchValue(e.target.value);
  }


  return (
    <form onSubmit={onSubmit} className="form">
      <input 
        type="search"
        name="searchValue"
        placeholder="serach for a title"
        value={searchValue}
        onChange={onChange}
      />
      <input 
        type="submit"
        value="search"
        className="btn btn-search"
        onChange={onChange}
      />
    </form>
  )
}
export default Form;
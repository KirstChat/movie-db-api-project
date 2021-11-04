import React from 'react';
import Select from 'react-select';
import './SearchFilters.css'

const SearchFilters = props => {
  return(
  <div classname="filter-options">
    <h1>Search Filter</h1>
    <Select className="genre-select" options={props.genreOptions} />
  </div>
  )
}
export default SearchFilters;
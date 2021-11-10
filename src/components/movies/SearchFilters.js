import React , {useState } from 'react';
import makeAnimated from 'react-select/animated';
import GenreFilter from './GenreFilter';
import CertificationFilter from './CertificationFilter';
import ProviderFilter from './ProviderFilter';
import './SearchFilters.css'


const SearchFilters = (props) => {
  const [genre, setGenre] = useState([]);
  const [provider, setProvider] = useState([]);
  const [certification, setCertification] = useState([]);

  let genreStr='';
  let providerStr='';
  let certificationStr='';

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 10,
      backgroundColor: state.isSelected ?  '#0d2353f': '#fff',
      color: '#0d2353f',
      fontWeight: '400',
      '&:hover':{
        backgroundColor: '#0d253f',
        color: '#fff',
        transform: 'scale(1.1)',
        paddingLeft: '1.5rem'
      }
    }), 
  }

  const animatedSelect = makeAnimated();

  const onSubmit = (e) => {
    e.preventDefault();
    for(let i=0; i<genre.length; i++) {
      genreStr += `${genre[i].value},`;
    }
    for(let i=0; i<provider.length; i++){
      providerStr += `${provider[i].value},`;
    }
    for(let i=0; i<certification.length; i++){
      certificationStr += `${certification[i].value},`;
    }
    props.searchMovieGenres(genreStr, providerStr, certificationStr);
}

  return(
  <form onSubmit={onSubmit} className="filter-form">
    <h1>Search Filter</h1>
      <GenreFilter 
          customStyles={customStyles}
          animatedSelect={animatedSelect} 
          setGenre={setGenre} 
      />
      <ProviderFilter 
            customStyles={customStyles}
            animatedSelect={animatedSelect}  
            setProvider={setProvider} 
      />
      <CertificationFilter 
            customStyles={customStyles}
            animatedSelect={animatedSelect}  
            setCertification={setCertification}
      />
    <input type="Submit" className="btn btn-search" /> 
  </form>
  )
}
export default SearchFilters;
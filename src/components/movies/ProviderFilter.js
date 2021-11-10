import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Select from 'react-select';

const ProviderFilter = ({setProvider, customStyles, animatedSelect}) =>  {
  const [providerList, setProviderList] = useState([]);

  useEffect(() => {
    const getProviderList = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&watch_region=GB`
      )
      setProviderList(res.data.results);
    }
    getProviderList();
  }, [])

  const providerOptions = providerList.map(provider => (
    {
      "value": provider.provider_id,
      "label": provider.provider_name
      }
  ))

  return (
    <Select className="select-options"
       isMulti
        isSearchable  
        autofocus
        styles={customStyles}
        components={animatedSelect}
        onChange={setProvider} 
        options={providerOptions} 
        placeholder="Select a streaming service..."
      />
  )
}
export default ProviderFilter;




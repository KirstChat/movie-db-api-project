import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Select from 'react-select';

const ProviderFilter = ({setProvider}) =>  {
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
  console.log(providerList.length);

  const providerOptions = providerList.map(provider => (
    {
      "value": provider.provider_id,
      "label": provider.provider_name
      }
  ))

  return (
    <Select 
       isMulti
        isSearchable  
        autofocus
        onChange={setProvider} 
        options={providerOptions} 
      />
  )
}
export default ProviderFilter;




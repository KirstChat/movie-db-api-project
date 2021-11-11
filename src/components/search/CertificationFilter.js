import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const CertificationFilter = ({
  setCertification,
  customStyles,
  animatedSelect,
}) => {
  const [certificationList, setCertificationList] = useState([]);

  useEffect(() => {
    const getCerticiations = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/certification/movie/list?api_key=${process.env.REACT_APP_API_KEY}&certification_country=GB`
      );
      setCertificationList(res.data.certifications.GB);
    };
    getCerticiations();
  }, []);

  const certificationOptions = certificationList.map((certs) => ({
    value: certs.certification,
    label: certs.certification,
  }));

  return (
    <Select
      className='select-options'
      isMulti
      isSearchable
      autofocus
      styles={customStyles}
      components={animatedSelect}
      onChange={setCertification}
      options={certificationOptions}
      placeholder='Select certification...'
      noOptionsMessage='Certification not available. Please choose another option'
    />
  );
};

export default CertificationFilter;

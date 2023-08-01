// .src/components/Countries.jsx

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCountries } from '../redux/country/countrySlice';
import { fetchStates } from '../redux/state/stateSlice';
import States from './States';
import '../styles/Countries.css';

const Countries = () => {
  const countryList = useSelector((state) => state.country.countryList);
  const dispatch = useDispatch();

  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleCountryClick = (countryName) => {
    setSelectedCountry(countryName);
    dispatch(fetchStates(countryName));
  };

  return (
    <div className="country-wrapper">
      {countryList.map((item) => (
        <div
          key={item.country}
          className="list"
          // className={`list ${selectedCountry === item.country ? 'selected' : ''}`}
          role="button"
          tabIndex={0}
          onClick={() => handleCountryClick(item.country)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleCountryClick(item.country);
            }
          }}
        >
          <h3>{item.country}</h3>
          {selectedCountry === item.country && <States selectedCountry={selectedCountry} />}
        </div>
      ))}
      {/* {selectedCountry && <States selectedCountry={selectedCountry} />} */}
    </div>
  );
};

export default Countries;

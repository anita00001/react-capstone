import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries } from '../redux/country/countrySlice';
import '../styles/Countries.css';

const Countries = () => {
  const countryList = useSelector((state) => state.country.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="country-wrapper">
      {countryList.map((country) => (
        <div key={country.country} className="country-list">
          <h3>{country.country}</h3>
        </div>
      ))}
    </div>
  );
};

export default Countries;

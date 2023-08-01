// ./src/components/Cities.jsx

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCities } from '../redux/city/citySlice';
// import CityData from './CityData';
import '../styles/Countries.css';

const Cities = () => {
  const countryList = useSelector((state) => state.city.cityList);
  console.log(countryList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div className="country-wrapper">
      {countryList.map((item) => (
        <div key={item.city} className="list">
          <h3>{item.city}</h3>
        </div>
      ))}
      {/* <CityData /> */}
    </div>
  );
};

export default Cities;

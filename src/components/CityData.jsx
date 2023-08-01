// ./src/components/CityData.jsx

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCityData } from '../redux/city/cityDataSlice';
// import '../styles/Countries.css';

const CityData = () => {
  const cityDataAll = useSelector((state) => state.dataCity.cityData);
  // console.log(cityDataAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCityData());
  }, [dispatch]);

  return (
    <div className="countries">
      <div className="country-wrapper">
        <h2>
          Country:
          {cityDataAll.country}
        </h2>
        <h2>
          State:
          {cityDataAll.state}
        </h2>
        <h2>
          City:
          {cityDataAll.city}
        </h2>
        <p>
          Index: ( Record Time:
          {' '}
          {cityDataAll.time}
          {' '}
          )
          <br />
          Air Quality Index:
          {cityDataAll.AQI}
          <br />
          Temperature:
          {' '}
          {cityDataAll.temperature}
          <br />
          Pressure:
          {' '}
          {cityDataAll.pressure}
          <br />
          Humidity:
          {' '}
          {cityDataAll.humidity}
          <br />
          Wind Speed:
          {' '}
          {cityDataAll.windSpeed}
          <br />
          Wind Direction:
          {' '}
          {cityDataAll.windDirection}
          <br />
          Ice Crystals:
          {' '}
          {cityDataAll.iceCrystals}
        </p>
      </div>
    </div>
  );
};

export default CityData;

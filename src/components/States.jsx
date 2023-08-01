// ./src/components/States.jsx
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchStates } from '../redux/state/stateSlice';
// import Cities from './Cities';
// import '../styles/Countries.css';

const States = ({ selectedCountry }) => {
  const stateList = useSelector((state) => state.states.stateList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStates(selectedCountry));
  }, [dispatch, selectedCountry]);

  return (
    <div className="country-wrapper">
      {stateList.map((item) => (
        <div key={item.state} className="list-state">
          <p>{item.state}</p>
        </div>
      ))}
      {/* <Cities /> */}
    </div>
  );
};

States.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
};

export default States;

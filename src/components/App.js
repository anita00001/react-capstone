// ./src/components/App.js
import '../styles/App.css';
import Countries from './Countries';
// import States from './States';
// import Cities from './Cities';
// import CityData from './CityData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countries />
        {/* <States /> */}
        {/* <Cities /> */}
        {/* <CityData /> */}
      </header>
    </div>
  );
}

export default App;

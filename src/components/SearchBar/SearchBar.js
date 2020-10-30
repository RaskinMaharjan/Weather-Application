import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = props => {
  const [unit, setUnit] = useState(props.unit);

  return (
    <div className="searchBar">
      <div>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={props.city}
          onChange={props.handleCity}
        />

        <div className="unit">
          <input
            type="radio"
            id="fahrenheit"
            name="units"
            value="imperial"
            checked={unit === 'imperial'}
            onChange={() => setUnit('imperial')}
          />
          <label htmlFor="fahrenheit">Fahrenheit</label>

          <input
            type="radio"
            id="celcius"
            name="units"
            value="metric"
            checked={unit === 'metric'}
            onChange={() => setUnit('metric')}
          />
          <label htmlFor="celcius">Celcius</label>
        </div>
      </div>

      <div className="forcast-button">
        <button onClick={() => props.fetchData(unit)}> Get Forecast </button>
      </div>
    </div>
  );
};

export default SearchBar;

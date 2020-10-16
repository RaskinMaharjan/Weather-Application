import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
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
          checked={props.unit === 'imperial'}
          onChange={props.handleUnit}
        />
        <label htmlFor="fahrenheit">Fahrenheit</label>

        <input
          type="radio"
          id="celcius"
          name="units"
          value="metric"
          checked={props.unit === 'metric'}
          onChange={props.handleUnit}
        />
        <label htmlFor="celcius">Celcius</label>
          </div>
          </div>

      <div className='forcast-button'>
        <button onClick={() => props.fetchData()}> Get Forcast </button>
        </div>
    </div>
  );
};

export default SearchBar;

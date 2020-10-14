import React from 'react';

import './Forcast.css';
import { getWeatherImage } from '../Helper/helper';

const Forcast = (props) => {
  const { weather, name, main } = props.data;

  if (props.data.hasOwnProperty('main')) {
    let unit = props.unit === 'metric' ? 'Celcius' : 'Fahrenheit';
    return (
      <div className="forcast">
        <div className="weather-card">
          <div className="weather-card-leftbox">
            <h2>{name}</h2>
            <h4>{weather[0].description}</h4>
            <h5>Humidity: {main.humidity}</h5>
          </div>
          <div className="weather-card-rightbox">
            <div className="weather-icon">
              {getWeatherImage(weather[0].main)}
            </div>
            <div className="weather-temperature">
              {main.temp}&#730;
              {unit[0]}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Forcast;

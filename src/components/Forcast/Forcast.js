import React from 'react';

import './Forcast.css';
import { WEATHERS } from '../constants';

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

const getWeatherImage = (weather) => {
  switch (weather) {
    case WEATHERS.CLOUDY:
      return (
        <img
          alt="Cloudy"
          src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        ></img>
      );

    case WEATHERS.RAINY:
      return (
        <img
          alt="Scattered showers"
          src="//ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
          data-atf="1"
        ></img>
      );

    case WEATHERS.CLEAR:
      return (
        <img
          alt="Clear"
          src="//ssl.gstatic.com/onebox/weather/64/sunny.png"
          id="wob_tci"
          data-atf="1"
        ></img>
      );

    default:
      return weather;
  }
};

export default Forcast;

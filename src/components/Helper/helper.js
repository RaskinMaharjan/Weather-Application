import React from 'react';

import { WEATHERS } from '../constants';

export const getWeatherImage = (weather) => {
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

    case WEATHERS.HAZE:
      return (
        <img
          alt="Haze"
          src="//ssl.gstatic.com/onebox/weather/64/fog.png"
          id="wob_tci"
          data-atf="1"
        ></img>
      );

    case WEATHERS.THUNDERSTORM:
      return (
        <img
          alt="Thunderstorm"
          src="//ssl.gstatic.com/onebox/weather/48/thunderstorms.png"
          data-atf="1"
        ></img>
      );

    default:
      return weather;
  }
};

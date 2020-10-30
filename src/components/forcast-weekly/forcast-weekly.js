import React from 'react';
import './forcast-weekly.css';

import { getDays, getCurrentUnit, getWeatherImage } from '../Helper/helper';

const ForcastWeekly = (props) => {
  let dayCounter = -1;
  const weeklyDays = getDays();
  let unit = getCurrentUnit(props.unit);

  return (
    <div className="week-container">
      <ul className="week-list">
        {props.weeklyData.map((data, key) => {
          dayCounter = dayCounter + 1;
          return (
            <li key ={key} className={`${dayCounter === 0 ? 'active' : ''}`}>
              <span className="weekly-weather-icon">
                {getWeatherImage(data.weather[0].main)}
              </span>
              <span className="day-name">{weeklyDays[dayCounter]}</span>
              <span className="day-temp">
                {data.temp.day}&#730;{unit[0]}
              </span>
              <span className="day-temp">
                {data.temp.night}&#730;{unit[0]}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ForcastWeekly;

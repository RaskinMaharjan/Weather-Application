import React from 'react';

import './Forcast.css';
import { getWeatherImage } from '../Helper/helper';

const Forcast = (props) => {
  const { weather, name, main } = props.data;
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayName = days[today.getDay()];

  const capitalizeFirstLetter = (string) => {
    const splitStr = string.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
  
    return splitStr.join(' '); 
  }

  if (props.data.hasOwnProperty('main')) {
    let unit = props.unit === 'metric' ? 'Celcius' : 'Fahrenheit';
    return (
      <div className="forcast">
       <div className='forcast-details'>
        <strong>{name}</strong>
          <div>
          <p>{dayName} </p>
            <h4>{capitalizeFirstLetter( weather[0].description )}</h4>
          </div>
          </div> 
        
        <div className='temperature-details'>
        <div className="weather-icon">
              {getWeatherImage(weather[0].main)}
            </div>
          <div>{main.temp}&#730;
              {unit[0]}</div>
        </div>
      
       <div className='humidity'>
          <p>
            <span className="forcast-label">Humidity:</span>
            <span className="forcast-data"> {main.humidity}% </span>
          </p>
          <p>
            <span className="forcast-label">Pressure:</span>
            <span className="forcast-data"> {main.pressure} </span>
          </p>
          <p>
            <span className="forcast-label">Maximum Temperature: </span>
            <span className="forcast-data">{main.temp_max}&#730;{unit[0]} </span>
          </p>
          <p>
            <span className="forcast-label">Minimum Temperature: </span>
            <span className="forcast-data">{main.temp_min}&#730;{unit[0]}</span>
          </p>
      </div>
    </div >
    );
  }

  return (
    <div className="forcast">
       <div className='forcast-details'>
        <strong>Kathmandu</strong>
          <div>
          <p>{dayName} </p>
          <h4>Partly Cloudy</h4>
          </div>
          </div> 
          <div className='temperature-details'>
        <div className="weather-icon">
        <img
          alt="Cloudy"
          src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        ></img>
            </div>
          <div>25&#730;C</div>
        </div>
        
       <div className='humidity'>
       <p>
            <span className="forcast-label">Humidity:</span>
            <span className="forcast-data"> 88% </span>
          </p>
          <p>
            <span className="forcast-label">Pressure:</span>
            <span className="forcast-data"> 1123 </span>
          </p>
          <p>
            <span className="forcast-label">Maximum Temperature: </span>
            <span className="forcast-data">25&#730;C </span>
          </p>
          <p>
            <span className="forcast-label">Minimum Temperature: </span>
            <span className="forcast-data">21&#730;C</span>
          </p>
      </div>
    </div >
       
  );
};

export default Forcast;

import React from 'react';
import './Forcast.css';

const Forcast = (props) => {
  if (props.data.hasOwnProperty('main')) {
    let unit = props.unit === 'metric' ? 'Celcius' : 'Fahrenheit';
    return (
      <div className="forcast">
        <p>
          It is currently {props.data.main.temp} degree {unit} with humidity {props.data.main.humidity}
        </p>
      </div>
    );
  }

  return null;
};

export default Forcast;

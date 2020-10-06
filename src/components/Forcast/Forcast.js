import React from 'react';
import './Forcast.css';

const Forcast = (props) => {
  if (props.data.hasOwnProperty('main')) {
    return (
      <div className="forcast">
        <p>
          It is currently {props.data.main.temp} degree Celcus with humidity{' '}
          {props.data.main.humidity}
        </p>
      </div>
    );
  }

  return null;
};

export default Forcast;

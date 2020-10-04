import React from 'react';

const searchBar = (props) => {
console.log(props);
    return (
        <div className = 'searchBar'>
                <input type ='text' placeholder='city name' maxLength='50' value= {props.city} onChange={props.handleCity}/>
                <input type ='radio' name='units' value='imperial' checked= {props.unit === 'imperial'} onChange={props.handleUnit}/> Fahrenheit
                <input type ='radio' name='units' value='metric' checked= {props.unit === 'metric'} onChange={props.handleUnit}/> Celcius
                <button onClick={props.fetchData}> Get Forcast </button>
        </div>
    )
}

export default searchBar;
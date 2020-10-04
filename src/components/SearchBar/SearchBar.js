import React from 'react';
import './SearchBar.css';

const searchBar = (props) => {
    return (
        <div className = 'searchBar'>
                <input type ='text' placeholder='city name' maxLength='50' value= {props.city} onChange={props.handleCity}/>
                   
                <div className = 'unit'>
                        <input type ='radio' id = 'fahrenheit' name='units' value='imperial' checked= {props.unit === 'imperial'} onChange={props.handleUnit}/> 
                        <label htmlFor ='fahrenheit'>Fahrenheit</label>
                        
                        <input type ='radio' id = 'celcius' name='units' value='metric' checked= {props.unit === 'metric'} onChange={props.handleUnit}/> 
                        <label htmlFor='celcius'>Celcius</label>
                </div>
                
                <button onClick={props.fetchData}> Get Forcast </button>
        </div>
    )
}

export default searchBar;
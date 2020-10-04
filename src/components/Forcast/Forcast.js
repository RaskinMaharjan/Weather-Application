import React from 'react';
import './Forcast.css';

const forcast = (props) => {

    let content = null; 
    if(props.data.hasOwnProperty('main'))  {
        
     content =     <div className = 'forcast'>
                         <p>It is currently {props.data.main.temp} degree Celcus with humidity {props.data.main.humidity}</p>
                    </div>
    }

    return (
        <div>
        {content}                
        </div>
    
    );

}

export default forcast;
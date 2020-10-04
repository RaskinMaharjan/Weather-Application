import React, {Component} from 'react';
import './App.css';
import Forcast from './components/Forcast/Forcast';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component{

  state = {
    city : "Kathmandu",
    unit : "metric",
    weatherData : {}
  }

  onCityChangeHandler = (e) => {
    const city = e.target.value;
    this.setState({city : city})
 }

  onUnitChangeHandler = (e) => {
    const unit = e.target.value;
     this.setState({unit : unit})
  }

  fetchWeatherData = () => {
  // TODO: fetch response data from open weather map api
  const city = this.state.city;
  const unit = this.state.unit;
  console.log("The request sent to api with params city = ", city, "and unit=", unit );
  this.setState(
    {
      weatherData : {"coord":{"lon":85.32,"lat":27.72},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":23,"feels_like":25.2,"temp_min":23,"temp_max":23,"pressure":1013,"humidity":83},"visibility":7000,"wind":{"speed":2.1,"deg":270},"clouds":{"all":75},"dt":1601818551,"sys":{"type":1,"id":9201,"country":"NP","sunrise":1601770372,"sunset":1601812903},"timezone":20700,"id":1283240,"name":"Kathmandu","cod":200}
    }
  )

  }

  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Weather Application</h1>
        </header>
        <SearchBar 
            city={this.state.city} 
            unit={this.state.unit} 
            fetchData = {this.fetchWeatherData} 
            handleUnit = {this.onUnitChangeHandler} 
            handleCity ={this.onCityChangeHandler}
        />
          <Forcast data = {this.state.weatherData}/>
      </div>
    );
  }

}

export default App;



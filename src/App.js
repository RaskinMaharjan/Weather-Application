import React, { Component } from 'react';

import Forecast from './components/Forecast/Forecast';
import SearchBar from './components/SearchBar/SearchBar';
import ForecastWeekly from './components/ForecastWeekly/ForecastWeekly';
import { getCurrentWeather, getWeeklyWeather } from './Api/weather-api';

import './App.css';

class App extends Component {
  state = {
    city: 'Kathmandu',
    unit: 'metric',
    weatherData: {},
    weeklyData: []
  };

  onCityChangeHandler = e => {
    const city = e.target.value;
    this.setState({ city: city });
  };

  onUnitChangeHandler = e => {
    const unit = e.target.value;
    this.setState({ unit: unit });
  };

  componentDidMount() {
    this.getForecast(this.state.unit);
  }

  getForecast = unit => {
    const { city } = this.state;

    getCurrentWeather(city, unit).then(response => {
      this.setState({
        weatherData: response.data,
        unit
      });
    });

    getWeeklyWeather(city, unit).then(response => {
      this.setState({ weeklyData: response.data.list });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Weather Application</h1>
        </header>
        <div className="container">
          <div className="main d-flex flex-column">
            <div className="forecast-section">
              <Forecast data={this.state.weatherData} unit={this.state.unit} />
            </div>
            <div className="day-section">
              <ForecastWeekly
                unit={this.state.unit}
                weeklyData={this.state.weeklyData}
              ></ForecastWeekly>
            </div>
            <div className="change-location">
              <SearchBar
                city={this.state.city}
                unit={this.state.unit}
                fetchData={this.getForecast}
                handleUnit={this.onUnitChangeHandler}
                handleCity={this.onCityChangeHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

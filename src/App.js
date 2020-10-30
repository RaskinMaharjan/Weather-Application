import React, { Component } from 'react';

import Forcast from './components/Forcast/Forcast';
import SearchBar from './components/SearchBar/SearchBar';
import ForcastWeekly from './components/forcast-weekly/forcast-weekly';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    city: 'Kathmandu',
    unit: 'metric',
    weatherData: {},
    weeklyData: [],
  };

  onCityChangeHandler = (e) => {
    const city = e.target.value;
    this.setState({ city: city });
  };

  onUnitChangeHandler = (e) => {
    const unit = e.target.value;
    this.setState({ unit: unit });
  };

  onClickHandler = () => {
    this.getWeather();
  };

  getWeather = () => {
    let config = {
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '9ce1f3d28emsh383c2ca823ec97fp1feca7jsn22216afc98ed',
        useQueryString: true,
      },
    };
    axios
      .get(
        'https://community-open-weather-map.p.rapidapi.com/weather?units=' +
          this.state.unit +
          '&q=' +
          this.state.city,
        config
      )
      .then((response) => {
        this.setState({
          weatherData: response.data,
        });
      });

    axios
      .get(
        'https://community-open-weather-map.p.rapidapi.com/forecast/daily?units=' +
          this.state.unit +
          '&q=' +
          this.state.city,
        config
      )
      .then((response) => {
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
              <Forcast data={this.state.weatherData} unit={this.state.unit} />
            </div>
            <div className="day-section">
              <ForcastWeekly
                unit={this.state.unit}
                weeklyData={this.state.weeklyData}
              ></ForcastWeekly>
            </div>
            <div className="change-location">
              <SearchBar
                city={this.state.city}
                unit={this.state.unit}
                fetchData={this.onClickHandler}
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

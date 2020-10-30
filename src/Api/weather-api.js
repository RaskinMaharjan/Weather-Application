import axios from 'axios';

const config = {
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': '9ce1f3d28emsh383c2ca823ec97fp1feca7jsn22216afc98ed',
    useQueryString: true,
  },
};

const BASE_URL = 'https://community-open-weather-map.p.rapidapi.com/';

export const getCurrentWeather = (city, unit) => {
  return axios.get(`${BASE_URL}weather?units=${unit}&q=${city}`, config);
};

export const getWeeklyWeather = (city, unit) => {
  return axios.get(`${BASE_URL}forecast/daily?units=${unit}&q=${city}`, config);
};

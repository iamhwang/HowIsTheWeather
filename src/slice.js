import { createSlice } from '@reduxjs/toolkit';

import {
  getWeather,
  getLocation,
} from './services/api';

const initialState = {
  isLoading: true, 
  isLocation: '',
  weatherData: {
    temp: '',
    temp_min: '',
    temp_max: '',
  },
};

const reducers = {
  setWeatherCondition(state, { payload: weather }) {
    return {
      ...state,
      weatherData: {
        ...state.weatherData,  
        weather,
      },
    };
  },
  setWeatherTemp(state, { payload: { temp, temp_min, temp_max }}) 
  {
    return {
      ...state,
      weatherData: {
        ...state.weatherData,  
        temp,
        temp_min,
        temp_max,
      },
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  setWeatherCondition,
  setWeatherTemp,
} = actions;

export function initialLocationSet() {
  return async (dispatch) => {
    const { latitude, longitude } = await getLocation();

    const { 
      data: { 
        main,
        weather,
      } 
    } = await getWeather(latitude, longitude); 
    
    dispatch(setWeatherCondition(weather[0].main));
    dispatch(setWeatherTemp(main));
  };
}

export default reducer;

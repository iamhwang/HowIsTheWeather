import React from 'react';
import { useSelector } from 'react-redux';

import WeatherCondionPage from './WeatherCondionPage';

export default function WeatherConditionContainer() {
  const { weatherData } = useSelector((state) => ({
    weatherData: state.weatherData,
  }));

  return (
    <WeatherCondionPage weatherData={weatherData} />
  )
}
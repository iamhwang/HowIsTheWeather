import React from 'react';
import { Alert } from 'react-native';

import * as Location from "expo-location";

import axios from "axios";
import Loading from './Loading';
import Weather from './Weather';

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    
    const { 
      data: { 
        main: { temp },
        weather,
      } 
    } = await axios.get(url);

    this.setState({ 
      isLoading: false, 
      condition: weather[0].main,
      temp,
    });
  }; 
  
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); 
      const { 
        coords: { latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("No data","Fail to load");
    } 
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} condition={condition} />;
  }
}
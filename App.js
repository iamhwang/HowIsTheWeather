import React from 'react';
import { Alert } from 'react-native';

import * as Location from "expo-location";

import Loading from './Loading';

export default class extends React.Component {
  state = {
    isLoading: true
  };
  
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); 
      const { 
        coords: { latitude, longitude}
      } = await Location.getCurrentPositionAsync();
    } catch (error) {
      Alert.alert("Can't find you", "so sad");
    } 
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return <Loading />
  }
}
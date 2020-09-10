import axios from "axios";
import { Alert } from 'react-native';
import * as Location from "expo-location";

export async function getWeather(latitude, longitude) {
  const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  
  console.log(url);
  
  const data = await axios.get(url);

  return data;
}; 

export async function getLocation() {
  try {
    await Location.requestPermissionsAsync(); 
    
    const { 
      coords
    } = await Location.getCurrentPositionAsync();
    
    return coords;

  } catch (error) {
    Alert.alert("Fail to get location","Allows location security");
  } 
};
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function WeatherCondionPage({ weatherData }) {
  const {
    weather, 
    tempData: { temp, temp_min, temp_max } 
  } = weatherData;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.weatherCondition}>{weather}</Text>
        <Text style={styles.tempNow}>{temp}°C</Text>
        <View style={styles.tempSummary}>  
          <Text style={styles.tempMaxMin}>{temp_max}°C / {temp_min}°C</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: '#e4e0d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherCondition: {
    fontSize: 20,
    fontWeight : 'bold',
  },
  tempSummary: {
    flexDirection: 'row',
  },
  tempNow: {
    fontSize: 40,
    fontWeight : '900',
  },
  tempMaxMin: {
    fontWeight : '300',
  },
});

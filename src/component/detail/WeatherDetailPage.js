import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherDetailPage() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.developer}>Hello? @iamhwang!</Text>
        <Text style={styles.gitAddress}>https://github.com/iamhwang/HowIsTheWeather</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#edd8b9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  developer: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  gitAddress: {
    fontSize: 13,
    color: '#606060',
  },
});
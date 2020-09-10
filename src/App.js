import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, StatusBar } from 'react-native';

import WeatherConditionContainer from './component/condition/WeatherConditionContainer';
import WeatherDetailPage from './component/detail/WeatherDetailPage';

import {
  initialLocationSet
} from './slice';

function WeatherHeaderPage() {
  return(
    <>
      <StatusBar barStyle="light-content" /> 
    </>
  )
}

export default function Apps() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialLocationSet());
  });

  return (
    <>
      <View style={styles.container}>
       <View style={styles.header}>
         <WeatherHeaderPage/>
       </View>
       <View style={styles.body}>
          <WeatherConditionContainer />
          <WeatherDetailPage />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  header: {
    flex: 1,
    backgroundColor: '#d4701e',
  },
  body: {
    flex: 10,
  },
});

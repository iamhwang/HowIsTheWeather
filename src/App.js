import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import WeatherHeaderPage from './component/header/WeatherHeaderPage';
import WeatherConditionContainer from './component/condition/WeatherConditionContainer';
import WeatherDetailPage from './component/detail/WeatherDetailPage';

import {
  initialLocationSet
} from './slice';

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

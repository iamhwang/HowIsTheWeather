import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropType from "prop-types";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp, condition }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.conditionIcon}>
          <Text>{temp}</Text>
            <MaterialCommunityIcons name="weather-cloudy" size={66} color="black" />
          <Text>{condition}</Text>
        </View>
        <View style={styles.conditionDetail}>
          <Text>Detail</Text>
        </View> 
      </View>
    </>
  )
}

Weather.prototype = {
  temp: PropType.number.isRequired,
  condition: PropType.string.isRequired,
  // condition: PropType.oneOf([
  //   "Clouds",
  // ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, 
  conditionIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  conditionDetail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }  
});
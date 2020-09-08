import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropType from "prop-types";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4c669f", "#3b5997"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.conditionIcon}>
          <Text>{temp}</Text>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName } size={66} color="black" />
          <Text>{condition}</Text>
        </View>
        <View style={styles.conditionDetail}>
          <Text>Detail</Text>
        </View> 
      </View>
    </LinearGradient>
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
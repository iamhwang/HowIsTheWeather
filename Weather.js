import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropType from "prop-types";

export default function Weather({ temp, condition }) {
  return (
    <>
      <View style={styles.container}>
        <Text>{temp}</Text>
        <Text>{condition}</Text>
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
  }
});
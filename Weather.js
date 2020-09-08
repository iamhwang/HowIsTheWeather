import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropType from "prop-types";

export default function Weather({ temp }) {
  return (
    <>
      <View style={styles.container}>
        <Text>{temp}</Text>
      </View>
    </>
  )
}

Weather.prototype = {
  temp: PropType.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
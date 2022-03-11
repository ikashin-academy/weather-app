import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Weather = ({ temp }) => {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

export default Weather;

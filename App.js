import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Loading, Weather } from "./components";
import * as Location from "expo-location";
import axios from "axios";
import { API_KEY } from "./const";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    this.setState({ isLoading: false, temp, condition: weather[0].main });

    console.log(weather, temp);
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Не могу определить местоположение", "Очень грустно :(");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <Weather condition={condition} temp={Math.round(temp)} />
        )}
      </>
    );
  }
}

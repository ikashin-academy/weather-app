import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    color: "white",
    fontWeight: "300",
    fontSize: 44,
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left",
  },
});

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Сиди дома",
    subtitle: "Ты видишь что на улице? 🌩",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a6bd5", "#3a6073"],
    title: "Возьми зонтик ☂️",
    subtitle: "Возможно скоро дождь усилится",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1cb5e0"],
    title: "На улице дождь ☔️",
    subtitle: "А значит скоро будет радуга!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "На улице снежок!",
    subtitle: "Одевайтесь потеплее! Лепите снеговиков ☃️",
  },
  Atmosphere: {
    iconName: "weather-windy-variant",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "",
    subtitle: "",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Ни черта не видно в тумане",
    subtitle: "Зато как в Сайлент-Хилле 👀",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "На улице смог",
    subtitle: "Не советую выходить без необходимости 🌫",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3e5151", "#decba4"],
    title: "На улице снежок!",
    subtitle: "Одевайтесь потеплее! Лепите снеговиков ☃️",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#b79891", "#94716b"],
    title: "Пыльно",
    subtitle: "Лучше закройте окна 💨",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "На улице туман",
    subtitle: "Зато как в Сайлент-Хилле 👀",
  },
  Sand: {
    iconName: "weather-tornado",
    gradient: ["#e65c00", "#F9D423"],
    title: "Буря в пустыне!",
    subtitle: "Лучше закройте окна 💨",
  },
  Ash: {
    iconName: "weather-hail",
    gradient: ["#1e130c", "#9a8478"],
    title: "Вулкан!",
    subtitle: "Ой-ой! 🌋",
  },
  Squall: {
    iconName: "weather-windy",
    gradient: ["#1F1C2C", "#928DAB"],
    title: "Ветер!",
    subtitle: "Бегите домой 💨",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#000000", "#434343"],
    title: "Торнадо! 🌪",
    subtitle: "Лучше уезжать подальше",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Погода супер!",
    subtitle: "Иди гулять, хватит сидеть дома! 🏖",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "На улице снежок!",
    subtitle: "Одевайтесь потеплее! Лепите снеговиков ☃️",
  },
};

const Weather = ({ temp, condition }) => {
  const { iconName, gradient, title, subtitle } = weatherOptions[condition];
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={iconName} size={96} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

export default Weather;

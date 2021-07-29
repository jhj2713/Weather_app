import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "3acf2e282655942cc61d26b93f0017c9";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async( latitude, longitude ) => {
    const { 
      data: {
        main :{temp},
        weather
      } 
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    this.setState({ 
      isLoading: false, 
      condition: weather[0].main, 
      temp: temp });
  };
  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, condition, temp } = this.state;
    return isLoading? <Loading/> : <Weather condition={condition} temp={Math.round(temp)}/>
  }
}

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#659999", "#f4791f"],
        title: "Haze",
        subTitle: "Today is haze"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#003973", "#e5e5be"],
        title: "Thunderstorm",
        subTitle: "Today is thunderstorm"
      },
      Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#373b44","#4286f4"],
        title: "Drizzle",
        subTitle: "Today is drizzle"
      },
      Rain: {
        iconName: "weather-pouring",
        gradient: ["#525252", "#3d72b4"],
        title: "Rain",
        subTitle: "Today is rain"
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#70e1f5", "#ffd194"],
        title: "Snow",
        subTitle: "Today is snow"
      },
      Atmosphere: {
        iconName: "weather-partly-cloudy",
        gradient: ["#ffa17f", "#00223e"],
        title: "Atmosphere",
        subTitle: "Today is atmosphere"
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#fceabb","#f8b500"],
        title: "Clear",
        subTitle: "Today is clear"
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#141e30", "#243b55"],
        title: "Cloud",
        subTitle: "Today is cloudy"
      },
      Mist: {
        iconName: "weather-fog",
        gradient: ["#9cecfb", "#65c7f7", "#0052d4"],
        title: "Mist",
        subTitle: "Today is misty"
      },
      Dust: {
        iconName: "weather-tornado",
        gradient: ["#2c3e50","#fd746c"],
        title: "Dust",
        subTitle: "Today is dusty"
      }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={ weatherOptions[condition].gradient }
            style={ styles.container }
        >
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={86} 
                    name={weatherOptions[condition].iconName} 
                    color="white"/>
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Dust",
        "Mist"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})
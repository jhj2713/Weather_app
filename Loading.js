import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B79891"
    },
    text: {
        color: "#ffffff",
        fontSize: 50,
        fontWeight: "bold"
    }
});
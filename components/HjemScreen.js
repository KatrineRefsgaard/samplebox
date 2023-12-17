import { StyleSheet, Text, View, Image } from "react-native";
import * as React from "react";

// SettingsScreen komponenten tager en prop med og printer indholdet af denne prop i en <Text>
function HjemScreen({ prop }) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{prop}</Text>
        <Image
          source={require("../assets/sample-box.png")} 
          style={styles.image}
        />
      </View>
    );
  }
  

export default HjemScreen

// Lokal styling til brug i SettingsScreen
const styles = StyleSheet.create({
    container: {
      paddingTop: 100,
      paddingBottom: 100,
      borderColor: 'white',
      borderWidth: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: '100%'
    },
    text: {
      fontSize: 20,
      fontFamily: 'Courier New'
    },
    image: {
      width: 380, 
      height: 580, 
      marginTop: 5, 
    },
  });
  
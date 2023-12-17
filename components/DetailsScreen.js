import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

// Denne side anvendes ikke. Er gemt for videreudvikling. 

const navController = (navigation, route) =>{
    navigation.navigate(route)
}


function DetailsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>DetailsScreen!</Text>
            <Button title="Go To Screen One" onPress={() => navController(navigation, 'ScreenOne')}  />
            <Button title="Go To Screen Two" onPress={() => navController(navigation, 'ScreenTwo')}  />
        </View>
    );
}

export default DetailsScreen


//Lokal styling til brug i DetailsScreen.
const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderColor: 'green',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },
});
import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

// Denne side anvendes ikke. Er gemt for videreudvikling. 

function ScreenTwo({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen Two!</Text>
            <View style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                <View style={{margin: '2%'}} >
                    <Button title="Go Back" onPress={() => navigation.goBack() } />
                </View>
                <View style={{margin: '2%'}} >
                    <Button title="Go To Screen One" onPress={() => navigation.navigate('ScreenOne')}  />
                </View>
            </View>
        </View>
    );
}
// Eksport af Screen således den kan importeres- og bruges i andres komponenter
export default ScreenTwo

// Lokal styling til brug i ScreenTwo
const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});
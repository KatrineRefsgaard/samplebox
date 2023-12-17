import { StyleSheet, Text, View } from "react-native";
import * as React from "react";

// Her oprettes de 4 forskellige pakker vi har til udvalg på appen.

function UnboxScreen({ prop }) {
  return (
    <View style={styles.container}>
      <View style={styles.shopItem}>
        <Text style={styles.title}>The Classic One</Text>
        <Text style={styles.price}>750 kr. / pr. måned</Text>
      </View>
      <View style={styles.shopItem}>
        <Text style={styles.title}>The Influencer    </Text>
        <Text style={styles.price}>850 kr. / pr. måned</Text>
      </View>
      <View style={styles.shopItem}>
        <Text style={styles.title}>Sample Repeat   </Text>
        <Text style={styles.price}>400 kr. / pr. måned</Text>
      </View>
      <View style={styles.shopItem}>
        <Text style={styles.title}>The Secondary   </Text>
        <Text style={styles.price}>500 kr. / pr. måned</Text>
      </View>
    </View>
  );
}

// Her styles de 4 bokse

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  shopItem: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'grey',
  },
});

export default UnboxScreen;

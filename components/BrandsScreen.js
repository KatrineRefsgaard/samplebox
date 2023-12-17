import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

// Brand listen ses her
const danishClothingBrands = [
  'Arnie Says',
  'Baum und Pferdgarten',
  'Bestseller',
  'Blanche',
  'By Malene Birger',
  'Co’Couture',
  'Cream',
  'Custommade',
  'Day Birger et Mikkelsen',
  'Denim Hunter',
  'Fub',
  'Ganni',
  'Gestuz',
  'H&M',
  'Hummel',
  'ICHI',
  'J. Lindeberg',
  'Jack & Jones',
  'KnowledgeCotton Apparel',
  'Le Fix',
  'Lollys Laundry',
  'Mads Nørgaard',
  'Marmar Copenhagen',
  'Minimum',
  'Molo',
  'Munthe',
  'Name it',
  'Neo Noir',
  'ONLY',
  'Object',
  'Part Two',
  'Peak Performance',
  'Pilgrim',
  'Rains',
  'Selected',
  'Sisters Point',
  'Sofie Schnoor',
  'Sons of Owen',
  'Soulland',
  'Samsøe & Samsøe',
  'Second Female',
  'Skagen',
  'Soft Gallery',
  'Sofie Schnoor',
  'Sons of Owen',
  'Soulland',
  'Samsøe & Samsøe',
  'Vero Moda',
  'Vila',
  'Wood Wood',
  'Won Hundred',
];

function BrandsScreen({ prop }) {
  const [searchText, setSearchText] = useState('');
  const sortedBrands = danishClothingBrands
    .filter((brand) =>
      brand.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort(); // Sorteres i alfabetisk rækkefølge 

  // Initialisere et tomt array for at udfylde med fed skrift 
  const brandsWithBoldLetters = [];
  let currentLetter = '';

  // Skifter fed skrift her. 
  sortedBrands.forEach((brand) => {
    const firstLetter = brand.charAt(0).toUpperCase();
    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;
      brandsWithBoldLetters.push(currentLetter);
    }
    brandsWithBoldLetters.push(brand);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{prop}</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Søg her..."
        onChangeText={setSearchText}
        value={searchText}
      />
      <FlatList
        data={brandsWithBoldLetters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.brandItem}>
            <Text style={item === item.toUpperCase() ? styles.boldLetter : styles.normalText}>
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

// Styling kommer her 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 16,
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
    fontFamily: 'Courier New',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
  },
  brandItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  boldLetter: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  normalText: {
    fontSize: 18,
  },
});

export default BrandsScreen;

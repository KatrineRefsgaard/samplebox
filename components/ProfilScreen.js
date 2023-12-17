import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { getDatabase, ref, push, set } from 'firebase/database'; // Her importeres 'set' funktion

// Her oprettes de 4 kategorier til garderobe profilen. Som er koblet til Firebase

const ProfileScreen = () => {
  const [clothingSize, setClothingSize] = useState('Vælg her');
  const [shoeSize, setShoeSize] = useState('Vælg her');
  const [favoriteColor, setFavoriteColor] = useState('Vælg her');
  const [favoriteStyle, setFavoriteStyle] = useState('Vælg her');

  const clothingSizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
  const shoeSizeOptions = ['35', '36', '37', '38', '39', '40', '41', '42'];
  const colorOptions = ['Beige', 'Hvid', 'Sort', 'Rød', 'Blå', 'Grøn', 'Gul'];
  const styleOptions = ['Sporty', 'Klassisk', 'Vintage', 'Hipster'];

  const handleUpdate = () => {
    const database = getDatabase(); // Her er reference til database 
    const profilesRef = ref(database, 'profiles');

    // Her kreeres et nyt profil objekt 
    const newProfile = {
      clothingSize,
      shoeSize,
      favoriteColor,
      favoriteStyle,
    };

    // Her pushes ny data til databasen 
    const newProfileRef = push(profilesRef);
    set(newProfileRef, newProfile); // Her sættes ny data til reference

    // Her resetes state variabler til der intialiserede værdier 
    setClothingSize('Vælg her');
    setShoeSize('Vælg her');
    setFavoriteColor('Vælg her');
    setFavoriteStyle('Vælg her');
  };

  // Her er dropdown listerne tilføjet og knap til sidst
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Garderobe Profil</Text>

      <View style={styles.settingContainer}>
        <Text>Tøj størrelse:</Text>
        <TouchableOpacity style={styles.dropdownContainer}>
          <ModalDropdown
            options={['Vælg her', ...clothingSizeOptions]}
            defaultValue={clothingSize}
            onSelect={(index, value) => setClothingSize(value)}
            textStyle={styles.dropdownText}
            initialScrollIndex={0} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.settingContainer}>
        <Text>Sko størrelse:</Text>
        <TouchableOpacity style={styles.dropdownContainer}>
          <ModalDropdown
            options={['Vælg her', ...shoeSizeOptions]}
            defaultValue={shoeSize}
            onSelect={(index, value) => setShoeSize(value)}
            textStyle={styles.dropdownText}
            initialScrollIndex={0} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.settingContainer}>
        <Text>Farve:</Text>
        <TouchableOpacity style={styles.dropdownContainer}>
          <ModalDropdown
            options={['Vælg her', ...colorOptions]}
            defaultValue={favoriteColor}
            onSelect={(index, value) => setFavoriteColor(value)}
            textStyle={styles.dropdownText}
            initialScrollIndex={0} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.settingContainer}>
        <Text>Stil:</Text>
        <TouchableOpacity style={styles.dropdownContainer}>
          <ModalDropdown
            options={['Vælg her', ...styleOptions]}
            defaultValue={favoriteStyle}
            onSelect={(index, value) => setFavoriteStyle(value)}
            textStyle={styles.dropdownText}
            initialScrollIndex={0} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.updateButtonContainer}>
        <Button title="Opdater" onPress={handleUpdate} />
      </View>
    </View>
  );
};

// Her kommer styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Courier New',
    alignItems: 'center',
    height: 50,
  },
  settingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  dropdownContainer: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
  },
  updateButtonContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'beige',
    padding: 10,
    borderRadius: 10,
  },
});

export default ProfileScreen;

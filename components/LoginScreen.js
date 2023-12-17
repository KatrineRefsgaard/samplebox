import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleLogin = () => {
    // Implement your login logic here
  }

  const handleSignUp = () => {
    // Check if the email is in a valid format
    if (!isValidEmail(email)) {
      console.error('Invalid email format');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Handle successful sign-up, e.g., navigate to the main screen
      })
      .catch((error) => {
        console.error('Sign-up failed:', error);
        // Handle sign-up error, e.g., display an error message
      });
  }

  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login or Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />

      
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

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
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;

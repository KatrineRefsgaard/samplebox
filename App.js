import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome from the custom library

// Import necessary Firebase modules
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Import components
import KameraScreen from './components/KameraScreen';
import UnboxScreen from './components/UnboxScreen';
import HjemScreen from './components/HjemScreen';
import BrandsScreen from './components/BrandsScreen';
import ProfilScreen from './components/ProfilScreen';
import LoginScreen from './components/LoginScreen';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_I3njVCywAw4bvZfaqkXu71Dmq_ZI_v0",
  authDomain: "sample-box-3e66d.firebaseapp.com",
  databaseURL: "https://sample-box-3e66d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sample-box-3e66d",
  storageBucket: "sample-box-3e66d.appspot.com",
  messagingSenderId: "234742534300",
  appId: "1:234742534300:web:1795595e108df377691d59"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Tab = createBottomTabNavigator();

function App() {
  const [user, setUser] = useState({ loggedIn: false });

  // Function to set the user state based on authentication status
  function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        callback({ loggedIn: true, user: user });
      } else {
        // User is signed out
        callback({ loggedIn: false });
      }
    });
  }

  // Activate the listener for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const MainScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => {
          // Your tab navigation options
        }}
      >
        <Tab.Screen
          name="Hjem"
          component={HjemScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color="pink" /> // Custom icon for Hjem
            ),
          }}
        />
        <Tab.Screen
          name="Unbox"
          component={UnboxScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="gift" size={size} color="pink" /> // Custom icon for Unbox
            ),
          }}
        />
        <Tab.Screen
          name="Kamera"
          component={KameraScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="camera" size={size} color="pink" /> // Custom icon for Kamera
            ),
          }}
        />
        <Tab.Screen
          name="Brands"
          component={BrandsScreen}
          options={{
            tabBarIcon: ({ size }) => (
              <FontAwesome name="shopping-bag" size={size} color="pink" /> // Pink icon for Brands
            ),
          }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfilScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color="pink" /> // Custom icon for Profil
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {user.loggedIn ? (
        <MainScreen />
      ) : (
        <LoginScreen auth={auth} />
      )}
    </NavigationContainer>
  );
}

export default App;


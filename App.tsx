import 'react-native-gesture-handler';
import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase';
import SignIn from './views/SignIn';

const App = (): ReactNode => {
  React.useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyBrrQBzbzH5aA9ayAOaErgka9x8sqjwIzI',
      authDomain: 'gittest-3c4d1.firebaseapp.com',
      projectId: 'gittest-3c4d1',
      storageBucket: 'gittest-3c4d1.appspot.com',
      messagingSenderId: '208765891211',
      appId: '1:208765891211:web:3d116d2fc4ef12a850da8e',
      measurementId: 'G-JJDJQ9E9G4',
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
    // firebase.analytics();
    // firebase.auth().onAuthStateChanged(user => {})
  }, []);

  return <SignIn />;
};

export default App;

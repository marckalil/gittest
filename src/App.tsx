import 'react-native-gesture-handler';
import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';
import AuthNavigator from 'navigator/AuthNavigator';
import MainNavigator from 'navigator/MainNavigator';
import Spinner from 'components/Spinner';

const App = (): ReactNode => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<null | boolean>(null);

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return isLoggedIn === null ? (
    <Spinner />
  ) : (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;

import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import firebase from 'firebase';

import {Colors} from 'react-native/Libraries/NewAppScreen';

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
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    // firebase.auth().onAuthStateChanged(user => {})
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Git Test</Text>
            <Text style={styles.sectionDescription}>
              Vraiment génial de ouf !
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

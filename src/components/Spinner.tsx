import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Spinner = (): React.ReactElement => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color="lightskyblue" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = (): React.ReactElement => {
  const navigation = useNavigation();
  const openDrawer = (): void => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Text>Welcome !</Text>
      <TouchableOpacity onPress={openDrawer}>
        <View style={styles.drawerButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'lightskyblue',
    backgroundColor: 'black',
    marginTop: 40,
  },
});

export default Home;

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProps } from 'navigator/MainNavigator';
import theme from 'constants/theme';

const Home = (): React.ReactElement => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const openDrawer = (): void => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Text>Welcome !</Text>
      <Text style={styles.text}>I am a regular text !</Text>
      <Text style={styles.textBold}>I am a bold text !</Text>
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
  text: {
    marginTop: 20,
    fontFamily: theme.fontFamily.regular,
    fontSize: 20,
  },
  textBold: {
    marginTop: 20,
    fontFamily: theme.fontFamily.bold,
    fontSize: 20,
  },
});

export default Home;

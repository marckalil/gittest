import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import firebase from 'firebase';
import Home from '../views/Home';

const MainNavigator = (): React.ReactElement => {
  const onSignOut = (): void => {
    firebase.auth().signOut();
  };

  const {Navigator, Screen} = createDrawerNavigator();
  const NavigatorContent = (
    props: DrawerContentComponentProps,
  ): React.ReactElement => (
    <DrawerContentScrollView>
      <DrawerItem label="Sign out" onPress={onSignOut} />
      <DrawerItem label="Close" onPress={props.navigation.closeDrawer} />
    </DrawerContentScrollView>
  );

  return (
    <Navigator drawerContent={NavigatorContent}>
      <Screen name="Home" component={Home} />
      {/* <DrawerItem label="Sign out" onPress={firebase.auth().signOut} /> */}
    </Navigator>
  );
};

export default MainNavigator;

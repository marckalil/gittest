import React from 'react';
import {
  DrawerNavigationProp,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import firebase from 'firebase';
import Home from 'views/Home';

type MainNavigatorParamList = {
  Home: undefined;
};
export type HomeScreenNavigationProps = DrawerNavigationProp<
  MainNavigatorParamList,
  'Home'
>;

const MainNavigator = (): React.ReactElement => {
  const onSignOut = (): void => {
    firebase.auth().signOut();
  };

  const { Navigator, Screen } = createDrawerNavigator<MainNavigatorParamList>();
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
    </Navigator>
  );
};

export default MainNavigator;

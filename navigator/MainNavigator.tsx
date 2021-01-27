import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/Home';

const MainNavigator = (): React.ReactElement => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default MainNavigator;

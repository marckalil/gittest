import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';

const AuthNavigator = (): React.ReactElement => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default AuthNavigator;

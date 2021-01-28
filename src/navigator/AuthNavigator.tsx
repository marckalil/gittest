import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';

const AuthNavigator = (): React.ReactElement => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <Navigator>
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          title: 'Sign in',
        }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Sign up',
          headerStyle: {
            backgroundColor: 'lightskyblue',
          },
          headerBackImage: ({tintColor}) => (
            <View
              style={{
                height: 16,
                aspectRatio: 1,
                borderWidth: 2,
                // borderColor: tintColor,
                borderColor: 'white',
                borderRadius: 8,
                marginHorizontal: 10,
              }}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AuthNavigator;

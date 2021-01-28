import React from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import theme from 'constants/theme';

const SignIn = (): React.ReactElement => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onChangeEmail = (newEmail: string): void => {
    setEmail(newEmail);
  };
  const onChangePassword = (newPassword: string): void => {
    setPassword(newPassword);
  };

  const onSignIn = (): void => {
    if (email !== '' && password !== '') {
      firebase.auth().signInWithEmailAndPassword(email, password);
    }
  };
  const onSignUp = (): void => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={onChangeEmail}
        placeholder="E-mail"
        value={email}
      />
      <TextInput
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={onChangePassword}
        placeholder="Password"
        value={password}
      />
      <Button title="Sign in" onPress={onSignIn} />
      <TouchableOpacity onPress={onSignUp}>
        <Text style={styles.navButton}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: '60%',
    borderRadius: 10,
    borderColor: 'lightskyblue',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  navButton: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 18,
    marginTop: 10,
  },
});

export default SignIn;

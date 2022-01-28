import React, {useContext} from 'react';
import {Text, Button} from 'react-native';
import {Center} from '../components/Center';
import {AuthContext} from '../authentication/AuthProvider';

export const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);

  return (
    <Center>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="Signup"
        onPress={() => {
          navigation.navigate('SignupScreen');
        }}
      />
    </Center>
  );
};

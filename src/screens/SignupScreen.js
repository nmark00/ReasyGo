import React from 'react';
import {Text, Button} from 'react-native';
import {Center} from '../components/Center';

export const SignupScreen = ({navigation}) => {
  return (
    <Center>
      <Text>Signup Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      />
    </Center>
  );
};

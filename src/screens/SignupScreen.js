import React, {useContext, useState} from 'react';
import {Text, Button, TextInput} from 'react-native';
import {Center} from '../components/Center';
import {AuthContext} from '../authentication/AuthProvider';

export const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signUpUserEmail} = useContext(AuthContext);

  const signUpUser = () => {
    // TODO: Have better error handling here?
    signUpUserEmail(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <Center>
      <Text>Signup Screen</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="password"
      />
      <Button title="Sign Up" onPress={signUpUser} />
      <Button
        title="Back to Login"
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      />
    </Center>
  );
};

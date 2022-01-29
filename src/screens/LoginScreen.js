import React, {useContext, useState} from 'react';
import {Text, Button, TextInput} from 'react-native';
import {Center} from '../components/Center';
import {AuthContext} from '../authentication/AuthProvider';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signInUserEmail} = useContext(AuthContext);

  const signInUserWithEmail = () => {
    // TODO: Have better error handling here?
    signInUserEmail(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <Center>
      <Text>Login Screen</Text>
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
      <Button title="Login" onPress={signInUserWithEmail} />
      <Button
        title="Go to Signup"
        onPress={() => {
          navigation.navigate('SignupScreen');
        }}
      />
    </Center>
  );
};

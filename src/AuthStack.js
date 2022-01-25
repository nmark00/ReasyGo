import React, {useContext} from 'react';
import {AuthContext} from './AuthProvider';
import {createStackNavigator} from '@react-navigation/stack';
import {Center} from './components/Center';
import {Text, Button} from 'react-native';

const Stack = createStackNavigator();

function Login({navigation}) {
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
        title="Register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  );
}

function Register({navigation}) {
  return (
    <Center>
      <Text>Register Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Center>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

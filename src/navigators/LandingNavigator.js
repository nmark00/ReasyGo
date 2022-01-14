import React from 'react';
import auth from '@react-native-firebase/auth';

import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements';

import LoginScreen from '../screens/LoginScreen';
import LandingScreen from '../screens/LandingScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();


export default function Landing() {
  return (
    <Stack.Navigator
      initialRouteName="LandingScreen"
      screenOptions={{gestureEnabled: false}}
    >
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />

    </Stack.Navigator>
    )
}

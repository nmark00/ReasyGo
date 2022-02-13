import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardScreen} from '../screens/OnboardScreen';

const Stack = createStackNavigator();

export const OnboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
    </Stack.Navigator>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MessagesScreen} from '../screens/MessagesScreen';

const Stack = createStackNavigator();

export const MessagesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

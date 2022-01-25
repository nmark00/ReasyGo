import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ShopScreen} from '../screens/ShopScreen';

const Stack = createStackNavigator();

export const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
    </Stack.Navigator>
  );
};

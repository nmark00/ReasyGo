import * as React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';


import HomeNavigator from './src/navigators/HomeNavigator';
import LandingNavigator from './src/navigators/LandingNavigator';


const Stack = createStackNavigator();


export default function App() {
  let initRoute;
  if (auth().currentUser && auth().currentUser.displayName)
    initRoute = "HomeNavigator";
  else initRoute = "LandingNavigator";

  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initRoute}
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen
            name="LandingNavigator"
            component={LandingNavigator}
          />
          <Stack.Screen
            name="HomeNavigator"
            component={HomeNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

  
}

import * as React from 'react';
import { View, Text, StyleSheet, FlatList,Alert } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function HomeNavigator(props) {

	return (
    <Stack.Navigator
    screenOptions={{gestureEnabled: false, headerShown: false}}>
    <Stack.Screen name="Tab">
      {props => 
              <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'HomeScreen') {
                    iconName = 'home';
                  } else if (route.name === 'ProfileScreen') {
                    iconName = 'user';
                  }
                  return <FontAwesome5 name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                headerStyle: {
                  backgroundColor: '#ffffff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  color: 'black'
                },
                // gestureEnabled: false
              })}
            >
            <Tab.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{ title: 'Home' }}
            />
            <Tab.Screen 
              name="ProfileScreen" 
              component={ProfileScreen} 
              options={{ title: 'Profile' }}
            />
          </Tab.Navigator> }
    </Stack.Screen>


  </Stack.Navigator>
  );
}
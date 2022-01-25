import React, {useContext} from 'react';
import {Center} from './components/Center';
import {Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext} from './AuthProvider';

const Tabs = createBottomTabNavigator();

function Home() {
  const {logout} = useContext(AuthContext);
  return (
    <Center>
      <Text>Home</Text>
      <Button
        title="Logout"
        onPress={() => {
          logout();
        }}
      />
    </Center>
  );
}

function Search() {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
}

export const AppTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};

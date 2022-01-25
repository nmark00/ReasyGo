import React, {useContext} from 'react';
import {Center} from './components/Center';
import {Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext} from './AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

function Shop() {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
}

function Messages() {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
}

function Profile() {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
}

export const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Shop':
              iconName = focused ? 'shirt' : 'shirt-outline';
              break;
            case 'Messages':
              iconName = focused ? 'mail' : 'mail-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = focused ? 'help-circle' : 'help-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Shop" component={Shop} />
      <Tabs.Screen name="Messages" component={Messages} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

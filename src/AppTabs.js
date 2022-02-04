import React, {useContext} from 'react';
import {Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext} from './authentication/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeStack} from './stacks/HomeStack';
import {SearchStack} from './stacks/SearchStack';
import {ShopStack} from './stacks/ShopStack';
import {MessagesStack} from './stacks/MessagesStack';
import {ProfileStack} from './stacks/ProfileStack';

const Tabs = createBottomTabNavigator();

export const AppTabs = () => {
  const {signOutUser} = useContext(AuthContext);
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'HomeStack':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'SearchStack':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'ShopStack':
              iconName = focused ? 'shirt' : 'shirt-outline';
              break;
            case 'MessagesStack':
              iconName = focused ? 'mail' : 'mail-outline';
              break;
            case 'ProfileStack':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = focused ? 'help-circle' : 'help-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}>
      <Tabs.Screen
        name="HomeStack"
        options={{
          title: 'Home',
        }}
        component={HomeStack}
      />
      <Tabs.Screen
        name="SearchStack"
        options={{
          title: 'Search',
        }}
        component={SearchStack}
      />
      <Tabs.Screen
        name="ShopStack"
        options={{
          title: 'Shop',
        }}
        component={ShopStack}
      />
      <Tabs.Screen
        name="MessagesStack"
        options={{
          title: 'Messages',
        }}
        component={MessagesStack}
      />
      <Tabs.Screen
        name="ProfileStack"
        options={{
          title: 'Profile',
          headerRight: () => {
            return <Button title="logout" onPress={signOutUser} />;
          },
        }}
        component={ProfileStack}
      />
    </Tabs.Navigator>
  );
};

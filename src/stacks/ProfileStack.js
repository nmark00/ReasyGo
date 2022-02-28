import React, {useContext} from 'react';
import {Button} from 'react-native';
import {AuthContext} from './../authentication/AuthProvider';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  const {signOutUser} = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerRight: () => {
            return <Button title="logout" onPress={signOutUser} />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

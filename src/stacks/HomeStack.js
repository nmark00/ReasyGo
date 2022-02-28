import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {CreatePostScreen} from '../screens/CreatePostScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation}) => ({
          title: 'Home',
          headerRight: () => {
            return (
              <Button
                title="post"
                onPress={() => navigation.navigate('CreatePostScreen')}
              />
            );
          },
        })}
      />
      <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
    </Stack.Navigator>
  );
};

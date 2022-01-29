import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Center} from './components/Center';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './authentication/AuthProvider';
import {AppTabs} from './AppTabs';
import {AuthStack} from './authentication/AuthStack';

export const Routes = () => {
  const {user, login, initializing} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          // decode it
          login();
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Return loading screen if initializing
  // TODO: What to do if accessing backend fails? Don't want to keep showing loading
  if (initializing) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import {Center} from './components/Center';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './authentication/AuthProvider';
import {AppTabs} from './AppTabs';
import {AuthStack} from './authentication/AuthStack';
import {OnboardStack} from './stacks/OnboardStack';

export const Routes = () => {
  const {user, onboarded, initializing} = useContext(AuthContext);

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
      {user ? onboarded ? <AppTabs /> : <OnboardStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

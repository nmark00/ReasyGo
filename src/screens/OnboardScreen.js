import React, {useContext, useState} from 'react';
import {Center} from '../components/Center';
import {Button, Text, TextInput} from 'react-native';
import {AuthContext} from '../authentication/AuthProvider';
import {addUserInfo} from '../firebase/UsersFirestore';

export const OnboardScreen = () => {
  const {user, onboarded, checkOnboarded} = useContext(AuthContext);

  const [name, setName] = useState('');

  return (
    <Center>
      <Text>Onboard Screen</Text>
      <TextInput value={name} onChangeText={setName} placeholder="name" />
      <Button
        title="Check Onboard"
        onPress={() => {
          console.log(`Onboarding status: ${onboarded}`);
        }}
      />
      <Button
        title="Finish Onboard"
        onPress={async () => {
          await addUserInfo(user.uid, name);
          setName('');
          checkOnboarded(user);
        }}
      />
    </Center>
  );
};

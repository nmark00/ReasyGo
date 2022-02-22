import React, {useContext, useEffect, useState} from 'react';
import {Center} from '../components/Center';
import {Text, Button} from 'react-native';
import {AuthContext} from '../authentication/AuthProvider';
import {getUsernameFromUID} from '../firebase/UsersFirestore';

export const ProfileScreen = () => {
  const {onboarded, user} = useContext(AuthContext);
  const [name, setName] = useState('');

  // Maybe put into AuthContext?
  useEffect(() => {
    getName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getName = async () => {
    setName(await getUsernameFromUID(user.uid));
  };

  return (
    <Center>
      <Text>Profile Screen</Text>
      <Text>{`Hello ${name}`}</Text>
      <Button
        title="Check Onboard"
        onPress={() => {
          console.log(`Onboarding status: ${onboarded}`);
        }}
      />
    </Center>
  );
};

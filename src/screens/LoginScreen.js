import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {AuthContext} from '../authentication/AuthProvider';
import {AuthStyles} from '../styles/AuthStyles';
import {Center} from '../components/Center';
import {ActivityIndicator} from 'react-native';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signInUserEmail, initializing} = useContext(AuthContext);

  const signInUserWithEmail = () => {
    // TODO: Have better error handling here?
    signInUserEmail(email, password);
    setEmail('');
    setPassword('');
  };

  if (initializing) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <View style={AuthStyles.colorContainer}>
      <ImageBackground
        source={require('../../assets/clothes.png')}
        style={AuthStyles.imgBackground}
        resizeMode="cover">
        <View style={AuthStyles.container}>
          <View style={AuthStyles.transparent} />
          <View style={AuthStyles.authContainer}>
            <Text style={AuthStyles.title}>Log In</Text>
            <TextInput
              style={AuthStyles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={AuthStyles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="password"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={AuthStyles.button}
              onPress={signInUserWithEmail}>
              <Text style={AuthStyles.buttonTitle}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AuthStyles.textButton} onPress={() => {}}>
              <Text style={AuthStyles.textButtonTitle}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={AuthStyles.separator}>
              <View style={AuthStyles.divider} />
              <Text style={AuthStyles.separatorText}>or</Text>
              <View style={AuthStyles.divider} />
            </View>
            <TouchableOpacity
              style={AuthStyles.secondButton}
              onPress={() => {
                navigation.navigate('SignupScreen');
              }}>
              <Text style={AuthStyles.secondButtonTitle}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

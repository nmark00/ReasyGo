import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  TextInput,
} from 'react-native';
import {AuthContext} from '../authentication/AuthProvider';
import {AuthStyles} from '../styles/AuthStyles';

export const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signUpUserEmail} = useContext(AuthContext);

  const signUpUser = () => {
    // TODO: Have better error handling here?
    signUpUserEmail(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={AuthStyles.colorContainer}>
      <ImageBackground
        source={require('../../assets/clothes.png')}
        style={AuthStyles.imgBackground}
        resizeMode="cover">
        <View style={AuthStyles.container}>
          <View style={AuthStyles.transparent} />
          <View style={AuthStyles.authContainer}>
            <Text style={AuthStyles.title}>Sign Up</Text>
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
            <TouchableOpacity style={AuthStyles.button} onPress={signUpUser}>
              <Text style={AuthStyles.buttonTitle}>Sign Up</Text>
            </TouchableOpacity>
            <View style={AuthStyles.separator}>
              <View style={AuthStyles.divider} />
              <Text style={AuthStyles.separatorText}>or</Text>
              <View style={AuthStyles.divider} />
            </View>
            <TouchableOpacity
              style={AuthStyles.secondButton}
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}>
              <Text style={AuthStyles.secondButtonTitle}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

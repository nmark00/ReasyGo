import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({children}) => {
  // Important Authentication State for the whole app
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = userState => {
    setUser(userState);
    if (initializing) {
      setInitializing(false);
    }
  };

  const signUpUserEmail = (email, password) => {
    setInitializing(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
    setInitializing(false);
  };

  const signInUserEmail = (email, password) => {
    setInitializing(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account successfully signed in!');
      })
      .catch(error => {
        console.log(error.code);
        console.error(error);
      });
    setInitializing(false);
  };

  const signOutUser = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out'))
      .catch(error => console.error(error));
  };

  // Set up authentication listener
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUpUserEmail: signUpUserEmail,
        signInUserEmail: signInUserEmail,
        signOutUser: signOutUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

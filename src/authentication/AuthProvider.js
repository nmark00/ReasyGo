import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {checkUserOnboard} from '../firebase/UsersFirestore';

export const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({children}) => {
  // Important Authentication State for the whole app
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [onboarded, setOnboarded] = useState(false);

  const onAuthStateChanged = userState => {
    // NOTE: We can do something like first setting user preferences (including onboarding status),
    // then setting the firebase user state to avoid the onboarding stack appearing when logging in
    // We may need to use a state management library for user preferences too.

    // Set user
    setUser(userState);

    // Check if user is onboarded
    checkOnboarded(userState);

    // Set initializing to false
    if (initializing) {
      setInitializing(false);
    }

    console.log(`Auth onboarded set to: ${onboarded}`);
  };

  const checkOnboarded = async userState => {
    // If the no current user, set onboarded to false
    if (!userState) {
      setOnboarded(false);
      console.log(`Hard set onboard status to: ${false}`);
    } else {
      // Check if the current user has an entry
      const onboardStatus = await checkUserOnboard(userState.uid);
      setOnboarded(onboardStatus);
      console.log(`Set onboard status to: ${onboardStatus}`);
    }
  };

  const signUpUserEmail = (email, password) => {
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
  };

  const signInUserEmail = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account successfully signed in!');
      })
      .catch(error => {
        console.log(error.code);
        console.error(error);
      });
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
        initializing,
        onboarded,
        checkOnboarded,
        signUpUserEmail: signUpUserEmail,
        signInUserEmail: signInUserEmail,
        signOutUser: signOutUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

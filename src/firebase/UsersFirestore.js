import firestore, {firebase} from '@react-native-firebase/firestore';

export const usersRef = firestore().collection('users');

// Functions for users in Firestore
export const checkUserOnboard = async userUID => {
  const userDoc = await usersRef.doc(userUID).get();
  return userDoc.exists;
};

export const addUserInfo = async (userUID, name) => {
  try {
    usersRef.doc(userUID).set({
      name: name,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const getUsernameFromUID = async userUID => {
  try {
    const userDocSnapshot = await usersRef.doc(userUID).get();
    if (userDocSnapshot.exists) {
      return userDocSnapshot.get('name');
    }
    return undefined;
  } catch (error) {
    return undefined;
  }
};

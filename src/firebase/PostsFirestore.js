import firestore, {firebase} from '@react-native-firebase/firestore';

export const postsRef = firestore().collection('posts');

// Functions for posts in Firestore
export const addPost = async ({title, description, price, creatorUID}) => {
  const {serverTimestamp} = firebase.firestore.FieldValue;
  postsRef.add({
    creatorUID,
    createdAt: serverTimestamp(),
    title,
    description,
    price: parseFloat(price),
  });
};

export const streamPostsByCreatorUID = ({creatorUID, callback}) => {
  return postsRef
    .where('creatorUID', '==', creatorUID)
    .orderBy('createdAt', 'desc')
    .onSnapshot(callback);
};

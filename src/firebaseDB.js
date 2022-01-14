import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAV2sqYlnmpEFvqjBc0uwzWTLfiWOJ-zzA",
  authDomain: "reasygo-5ceba.firebaseapp.com",
  projectId: "reasygo-5ceba",
  storageBucket: "reasygo-5ceba.appspot.com",
  messagingSenderId: "436460109632",
  appId: "1:436460109632:web:8c418c55a5db17cebe44a5",
  measurementId: "G-WRSCZTTKXM"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.firestore();

export default firebase;
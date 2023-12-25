import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDGULPPos5iN_RKvRU2_oKJNc4A2-qflEc",
  authDomain: "netflix-clone-9086d.firebaseapp.com",
  projectId: "netflix-clone-9086d",
  storageBucket: "netflix-clone-9086d.appspot.com",
  messagingSenderId: "937472106112",
  appId: "1:937472106112:web:9411b5eabf655e43b71065",
  measurementId: "G-K28T5H1EN8",
};

export const FireBase = firebase.initializeApp(firebaseConfig);


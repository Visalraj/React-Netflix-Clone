import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "netflix-clone-9086d.firebaseapp.com",
  projectId: "netflix-clone-9086d",
  storageBucket: "netflix-clone-9086d.appspot.com",
  messagingSenderId: "937472106112",
  appId: "YOUR-APP-ID",
  measurementId: "G-K28T5H1EN8",
};

export const FireBase = firebase.initializeApp(firebaseConfig);


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
//Your-Firebase-config
};

export const FireBase = firebase.initializeApp(firebaseConfig);


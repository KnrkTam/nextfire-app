import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCCVbcgwi5EFcMxWaZGp-ILMi1_kjGJUtA",
    authDomain: "nextfire-fe8ac.firebaseapp.com",
    projectId: "nextfire-fe8ac",
    storageBucket: "nextfire-fe8ac.appspot.com",
    messagingSenderId: "101573822699",
    appId: "1:101573822699:web:d2880cd7bdd05c28be16ae",
    measurementId: "G-0NG7SCSH7J"};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

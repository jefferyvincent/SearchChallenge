import firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyCJNYUzXBO1Jbz5KdZTTS4qW5c97DuNUaQ',
    authDomain: 'searchchallenge-a1631.firebaseapp.com',
    databaseURL: 'https://searchchallenge-a1631-default-rtdb.firebaseio.com',
    projectId: 'searchchallenge-a1631',
    storageBucket: 'searchchallenge-a1631.appspot.com',
    messagingSenderId: '528834001149',
    appId: '1:528834001149:web:28f4cd1c1ebceb8bfb2694'
  };
/* eslint-disable no-unused-vars */
let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}
/* eslint-enable no-unused-vars */

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
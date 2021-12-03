// Import the functions you need from the SDKs you need
// import * as firebase from 'firebase';
import  firebase from 'firebase';
import  'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeTT4HGn2EufGZXEadRpt-OxPZDy9JI5U",
  authDomain: "react-native-project-module.firebaseapp.com",
  projectId: "react-native-project-module",
  storageBucket: "react-native-project-module.appspot.com",
  messagingSenderId: "999374181980",
  appId: "1:999374181980:web:7fed96857391bbf3ccf899"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

// const db = app.firestore();
const auth = firebase.auth();
const db = firebase.firestore();
// const firebase = firebase.firestore();


export {  auth , db  };
// const app = initializeApp(firebaseConfig);
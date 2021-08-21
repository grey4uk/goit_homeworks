import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzpS4wyPyqTIe0gsAB7_pewjjj-9ho7jA",
  authDomain: "contactsdatabase-26d45.firebaseapp.com",
  projectId: "contactsdatabase-26d45",
  storageBucket: "contactsdatabase-26d45.appspot.com",
  messagingSenderId: "1083474065616",
  appId: "1:1083474065616:web:297b55000aeae5e5cb06d5",
  measurementId: "G-B5Z5D05PHF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };

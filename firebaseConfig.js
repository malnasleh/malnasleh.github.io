// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE9nFVjbHRcA5NLyaPNvhWvHVL4jP1PHg",
  authDomain: "developer-portfolio-1b382.firebaseapp.com",
  projectId: "developer-portfolio-1b382",
  storageBucket: "developer-portfolio-1b382.appspot.com",
  messagingSenderId: "230396646858",
  appId: "1:230396646858:web:d553f852a577a8855fab33",
  measurementId: "G-BELNJ0TB12"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWM2XPkbf0uYDHb5E2QDlvIXsLM94R-SY",
  authDomain: "gibloyaltyapp.firebaseapp.com",
  projectId: "gibloyaltyapp",
  storageBucket: "gibloyaltyapp.appspot.com",
  messagingSenderId: "1073337441249",
  appId: "1:1073337441249:web:633e30f275159e29e690a0",
  measurementId: "G-EX6C6XQ8XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
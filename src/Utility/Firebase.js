// Import the necessary functions from Firebase modular SDK
import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Import firestore directly, no need for compat




  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD394iy82ocJRu0eEIny7pOkF4InDpK7HY",
  authDomain: "fir-fe37d.firebaseapp.com",
  projectId: "fir-fe37d",
  storageBucket: "fir-fe37d.appspot.com",
  messagingSenderId: "880811334701",
  appId: "1:880811334701:web:b7e9f82c1e94b236006ca4"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

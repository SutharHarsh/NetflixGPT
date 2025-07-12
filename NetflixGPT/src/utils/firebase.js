// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPviHOizXxAsT9wUeSuw6kZddmRNXGlbs",
  authDomain: "netflixgpt-28614.firebaseapp.com",
  projectId: "netflixgpt-28614",
  storageBucket: "netflixgpt-28614.firebasestorage.app",
  messagingSenderId: "613139607085",
  appId: "1:613139607085:web:0e1dd505e63cf6dcd4d2a4",
  measurementId: "G-2HG3QS8Q2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
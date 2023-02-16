// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACIxZR3nhYYne4sIQWuSSWw8zoey2OxD8",
  authDomain: "testeprojeto-3c623.firebaseapp.com",
  projectId: "testeprojeto-3c623",
  storageBucket: "testeprojeto-3c623.appspot.com",
  messagingSenderId: "145916206547",
  appId: "1:145916206547:web:60ef0955ebfeef6f14a326",
  measurementId: "G-6JNNB8KS90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
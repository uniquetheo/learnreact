// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzL6lhMu0PfE8sUgkzV__hx57HMwJMRaY",
  authDomain: "learnreact-17065.firebaseapp.com",
  projectId: "learnreact-17065",
  storageBucket: "learnreact-17065.appspot.com",
  messagingSenderId: "484757476500",
  appId: "1:484757476500:web:42a8964751945c14461081",
  measurementId: "G-G08ZTFERWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


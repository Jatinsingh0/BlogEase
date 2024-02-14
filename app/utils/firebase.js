// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogease-4e157.firebaseapp.com",
  projectId: "blogease-4e157",
  storageBucket: "blogease-4e157.appspot.com",
  messagingSenderId: "998028947319",
  appId: "1:998028947319:web:419bc81aa3c0ade6b5fb72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
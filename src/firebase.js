// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDee7DsITpqglWiIRf0kqjlkHLEPwTUgo",
    authDomain: "react-ecsite-8a491.firebaseapp.com",
    projectId: "react-ecsite-8a491",
    storageBucket: "react-ecsite-8a491.firebasestorage.app",
    messagingSenderId: "669008516329",
    appId: "1:669008516329:web:b433d45744ebe313aacc78"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

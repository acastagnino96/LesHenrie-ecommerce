// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjA_5zhUrNq5uBTu0xShftLLYHZUCCeY0",
    authDomain: "leshenri-ecomm.firebaseapp.com",
    projectId: "leshenri-ecomm",
    storageBucket: "leshenri-ecomm.appspot.com",
    messagingSenderId: "234911222029",
    appId: "1:234911222029:web:e9aa229f5e8243e6900844"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth= getAuth(app);
export const storage = firebase.storage(app);

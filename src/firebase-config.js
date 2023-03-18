// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABnq2PBlItB1Y6TtmiuGzBTuJmJGGM44I",
  authDomain: "womenproject-8c1db.firebaseapp.com",
  projectId: "womenproject-8c1db",
  storageBucket: "womenproject-8c1db.appspot.com",
  messagingSenderId: "392243072670",
  appId: "1:392243072670:web:69e2eb22f74391dbf2b58f",
  measurementId: "G-Y7RFLNYXVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app)
export const provider =new GoogleAuthProvider();
export const storage=getStorage(app)
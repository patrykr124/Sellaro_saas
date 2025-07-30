// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "sellaro-cdb9f.firebaseapp.com",
  projectId: "sellaro-cdb9f",
  storageBucket: "sellaro-cdb9f.firebasestorage.app",
  messagingSenderId: "1081071958486",
  appId: "1:1081071958486:web:a8ed3f6dac8a600b984c77",
  measurementId: "G-VXG0W126LP"
};
// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEuPDtfJovg4XFMDtm0AU-VGf8RMjNf-s",
  authDomain: "eco-code-17.firebaseapp.com",
  projectId: "eco-code-17",
  storageBucket: "eco-code-17.firebasestorage.app",
  messagingSenderId: "882493375800",
  appId: "1:882493375800:web:50520d69e724bb5b6e2dcd",
  measurementId: "G-7651H5E6ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };

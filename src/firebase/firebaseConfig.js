// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4jMZeqfeCP9FdVoENeCs7O8czE0iK7kk",
  authDomain: "cuber-2557e.firebaseapp.com",
  projectId: "cuber-2557e",
  storageBucket: "cuber-2557e.appspot.com",
  messagingSenderId: "260845382658",
  appId: "1:260845382658:web:115c426ce321c4b32acb1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

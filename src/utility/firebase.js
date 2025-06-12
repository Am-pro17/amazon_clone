// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import "firebase/compat/auth"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClBPjmqM73JetxqtiDcyW8z3Plx7aKJgQ",
  authDomain: "clone-f8190.firebaseapp.com",
  projectId: "clone-f8190",
  storageBucket: "clone-f8190.firebasestorage.app",
  messagingSenderId: "878646989854",
  appId: "1:878646989854:web:3b711c20fda66e6e780a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
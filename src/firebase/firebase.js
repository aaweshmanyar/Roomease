// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg2p1nPZQ39AU91CDzRWeYtQjBs5HHf-Y",
  authDomain: "ajazgraphic-da740.firebaseapp.com",
  projectId: "ajazgraphic-da740",
  storageBucket: "ajazgraphic-da740.appspot.com",
  messagingSenderId: "600209988666",
  appId: "1:600209988666:web:d806f6d7dfd10fa394a903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {app, auth, db};
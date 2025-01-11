import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, updateDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXEXhu_LqFbUvTJWeQV5jQkKqISaM4Gdg",
  authDomain: "digital-line-india.firebaseapp.com",
  projectId: "digital-line-india",
  storageBucket: "digital-line-india.firebasestorage.app",
  messagingSenderId: "920795425936",
  appId: "1:920795425936:web:acfe7902a79d2c1b6efc15",
  measurementId: "G-9QVB8MRTSL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, doc, updateDoc, getDocs }; // Added doc and updateDoc to export

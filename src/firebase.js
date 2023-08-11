import { initializeApp } from "firebase/app";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdx-gD1dAW7CmM77ZajUCoDZEJDXJYltw",
  authDomain: "disneyplus-clone-c6556.firebaseapp.com",
  projectId: "disneyplus-clone-c6556",
  storageBucket: "disneyplus-clone-c6556.appspot.com",
  messagingSenderId: "140935692400",
  appId: "1:140935692400:web:5886cd2f2c376f949074b5",
  measurementId: "G-7EGR0RC66G",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export {
  auth,
  provider,
  storage,
  signInWithPopup,
  doc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
};
export default db;

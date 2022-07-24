import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBILYx1RkxWscJXTA8hQnspUmEicMlGokQ",
  authDomain: "growlease.firebaseapp.com",
  projectId: "growlease",
  storageBucket: "growlease.appspot.com",
  messagingSenderId: "616288529181",
  appId: "1:616288529181:web:038e9458778ac39af94ff4",
  measurementId: "G-BWJGECX5WL",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

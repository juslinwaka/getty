import { initializeApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzk21kcSXeQeRooC5lS1ccRbP6gvudhTw",
  authDomain: "getty-ae987.firebaseapp.com",
  projectId: "getty-ae987",
  storageBucket: "getty-ae987.firebasestorage.app",
  messagingSenderId: "92191028846",
  appId: "1:92191028846:web:a7ccbf66cc937c94ca987f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
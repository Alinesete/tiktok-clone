import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyClJHJa2msAroEalsqTud4XTNjICjhwuzE",
  authDomain: "repository-of-things.firebaseapp.com",
  projectId: "repository-of-things",
  storageBucket: "repository-of-things.appspot.com",
  messagingSenderId: "775319238076",
  appId: "1:775319238076:web:a4722ca3e4817d2f3427b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBuS8GnLIy8IRKq8_zOkkAK1P-S-kEpmA",
  authDomain: "portfolio-57d49.firebaseapp.com",
  projectId: "portfolio-57d49",
  storageBucket: "portfolio-57d49.firebasestorage.app",
  messagingSenderId: "1062500389715",
  appId: "1:1062500389715:web:db726885382fc4f93247a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)


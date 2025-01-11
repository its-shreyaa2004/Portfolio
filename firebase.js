
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {

  apiKey: "AIzaSyBt_S1j6Khh4gwLnjDUilhRW8vnx2ojXBc",
  authDomain: "portfolio-a2b06.firebaseapp.com",
  projectId: "portfolio-a2b06",
  storageBucket: "portfolio-a2b06.firebasestorage.app",
  messagingSenderId: "327583380090",
  appId: "1:327583380090:web:720f1a1cff9aecb32ac1c3",
  measurementId: "G-9R204K3D4L"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
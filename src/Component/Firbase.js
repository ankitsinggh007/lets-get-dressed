// Import the functions you need from the SDKs you need
import { initializeApp,get } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFaH-LwxlYillQf23-7Txk2VujNaq2Ae4",
  authDomain: "let-get-dressed.firebaseapp.com",
  projectId: "let-get-dressed",
  storageBucket: "let-get-dressed.appspot.com",
  messagingSenderId: "921578170108",
  appId: "1:921578170108:web:f3b575f0833d10440c1979",
  measurementId: "G-1B5F0BXLW2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
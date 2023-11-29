import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTgbuGv615QYTj_YAQ-e56VjoUlqaRxz4",
  authDomain: "maltmania-701aa.firebaseapp.com",
  projectId: "maltmania-701aa",
  storageBucket: "maltmania-701aa.appspot.com",
  messagingSenderId: "59674361536",
  appId: "1:59674361536:web:ccf34115c8eeb62a49f725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;


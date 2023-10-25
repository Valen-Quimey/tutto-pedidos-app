
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt1XoD1B7vkdoi4lskDq_GFMFODBZuCm0",
  authDomain: "tutto-pedidos-app.firebaseapp.com",
  projectId: "tutto-pedidos-app",
  storageBucket: "tutto-pedidos-app.appspot.com",
  messagingSenderId: "911168678543",
  appId: "1:911168678543:web:61f69f4b72006845b29efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//db
const db = getFirestore(app);


export const initFirebase = () => app
export { db };
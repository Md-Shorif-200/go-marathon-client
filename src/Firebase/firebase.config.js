// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWSwkqx9tT6w2U1l-eFbkRhhJBJ-VepVw",
  authDomain: "go-marathon-21c56.firebaseapp.com",
  projectId: "go-marathon-21c56",
  storageBucket: "go-marathon-21c56.firebasestorage.app",
  messagingSenderId: "993025808114",
  appId: "1:993025808114:web:ef604d66851054e57d626b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
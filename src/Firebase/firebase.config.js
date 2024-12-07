// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHPm7zyEUrfY7MirvJZHUKq5KLud3Ysiw",
  authDomain: "govisaflow.firebaseapp.com",
  projectId: "govisaflow",
  storageBucket: "govisaflow.firebasestorage.app",
  messagingSenderId: "467293920462",
  appId: "1:467293920462:web:9eb4acdf929b2f36b0849f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
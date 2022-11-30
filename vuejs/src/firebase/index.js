// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArpGVaIWc6madTB-6wPdDbL3A0pdSNK3E",
  authDomain: "vuejs-firebase-4cad5.firebaseapp.com",
  projectId: "vuejs-firebase-4cad5",
  storageBucket: "vuejs-firebase-4cad5.appspot.com",
  messagingSenderId: "140050969971",
  appId: "1:140050969971:web:80b11296fb9849bbeb0106",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

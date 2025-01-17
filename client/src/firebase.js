// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-da9ce.firebaseapp.com",
  projectId: "real-estate-da9ce",
  storageBucket: "real-estate-da9ce.appspot.com",
  messagingSenderId: "258708293367",
  appId: "1:258708293367:web:347c0fc5880c216b86f5f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
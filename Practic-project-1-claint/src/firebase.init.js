// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQMkguLUa5oubm-Z7Wy1yT_Fs7mx9Pfjk",
  authDomain: "mafsar-ul-ulum-sinior-ma-3fc0b.firebaseapp.com",
  projectId: "mafsar-ul-ulum-sinior-ma-3fc0b",
  storageBucket: "mafsar-ul-ulum-sinior-ma-3fc0b.appspot.com",
  messagingSenderId: "252173379292",
  appId: "1:252173379292:web:354f86d5e16c6b0553b619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-ab746.firebaseapp.com",
//   projectId: "chat-ab746",
//   storageBucket: "chat-ab746.appspot.com",
//   messagingSenderId: "901216368405",
//   appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore()

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzWj_E1BCRa-91vCLLOllotsmW2OWgogo",
  authDomain: "mini-semchat.firebaseapp.com",
  projectId: "mini-semchat",
  storageBucket: "mini-semchat.appspot.com",
  messagingSenderId: "379031710800",
  appId: "1:379031710800:web:67a595c71ce7a3f9e87555",
  measurementId: "G-KX277SYDBP"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore();


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAuKmIgKzjp4p88szlVf36zL46H0g00RAw",
//   authDomain: "private-talks-13c1d.firebaseapp.com",
//   projectId: "private-talks-13c1d",
//   storageBucket: "private-talks-13c1d.appspot.com",
//   messagingSenderId: "1048260137497",
//   appId: "1:1048260137497:web:7d8a6407821fa450da5088",
//   measurementId: "G-V8NEJZTEQ9"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
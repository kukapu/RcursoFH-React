// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWV2wJPdMaUsl6Clx5etubkAYQ7qryNb4",
  authDomain: "react-cursos-54e82.firebaseapp.com",
  projectId: "react-cursos-54e82",
  storageBucket: "react-cursos-54e82.appspot.com",
  messagingSenderId: "976479128147",
  appId: "1:976479128147:web:6e5da52510484e495f94a6",
  measurementId: "G-QQWVLP50Y0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )

// export const analytics = getAnalytics(app);
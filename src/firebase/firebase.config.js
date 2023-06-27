// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCWuyoK2NOVZNOQc-u1-NPekcS2TsNHloU",
  authDomain: "learnup-72e5b.firebaseapp.com",
  projectId: "learnup-72e5b",
  storageBucket: "learnup-72e5b.appspot.com",
  messagingSenderId: "332676713708",
  appId: "1:332676713708:web:a1dd7b2d084620d337e9c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

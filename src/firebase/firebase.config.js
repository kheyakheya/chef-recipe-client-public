// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAmtbppAw2nYV3YZkNZYTOYENoPN91sVEA",
//   authDomain: "assignment-ten-prac.firebaseapp.com",
//   projectId: "assignment-ten-prac",
//   storageBucket: "assignment-ten-prac.appspot.com",
//   messagingSenderId: "665413183536",
//   appId: "1:665413183536:web:b2a62fb058b784ecb2a5f5"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId:  import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
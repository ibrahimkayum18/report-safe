// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHVG03HlVfXKP3prHI-CegibpmDgbgb48",
  authDomain: "report-safe.firebaseapp.com",
  projectId: "report-safe",
  storageBucket: "report-safe.appspot.com",
  messagingSenderId: "949001572949",
  appId: "1:949001572949:web:62994b93fedc162f3cfadc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
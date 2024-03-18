// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB-ABq_nBNCef6VfIW7z4YUhjUuY0vv_I",
  authDomain: "agenda-288b6.firebaseapp.com",
  projectId: "agenda-288b6",
  storageBucket: "agenda-288b6.appspot.com",
  messagingSenderId: "375524659735",
  appId: "1:375524659735:web:8a7a6beb8649660694c252",
  measurementId: "G-5N58J0D5Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app ;
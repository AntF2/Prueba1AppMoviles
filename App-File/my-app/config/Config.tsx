// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtw1-INrh1Og7-YTr-NWigb8hChVd7p-8",
  authDomain: "app-1-2b43f.firebaseapp.com",
  databaseURL: "https://app-1-2b43f-default-rtdb.firebaseio.com",
  projectId: "app-1-2b43f",
  storageBucket: "app-1-2b43f.appspot.com",
  messagingSenderId: "563780395581",
  appId: "1:563780395581:web:4768c77d80ee670382c054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getDatabase(app);
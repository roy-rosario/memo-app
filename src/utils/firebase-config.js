import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA8IjSKPIEkUkuj2gY5sTe1-E6RiUUmyoo",
  authDomain: "memo-project-7f643.firebaseapp.com",
  projectId: "memo-project-7f643",
  storageBucket: "memo-project-7f643.appspot.com",
  messagingSenderId: "875758728568",
  appId: "1:875758728568:web:a2037668f316ceb9eac48d"
};

let db = null

const initializeFirebase = () =>{
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app)
}

const getDB = () =>{
    return db
}

export {initializeFirebase, getDB}
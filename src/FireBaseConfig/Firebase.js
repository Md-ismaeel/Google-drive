import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCwQ535HK4soV4En3CxcnZMomptIiayU8M",
    authDomain: "drive-2-react.firebaseapp.com",
    projectId: "drive-2-react",
    storageBucket: "drive-2-react.appspot.com",
    messagingSenderId: "608915190191",
    appId: "1:608915190191:web:a0cede50ed8e8464607f5a",
    measurementId: "G-7MG56LEGRX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const storage = getStorage();


export { db, provider, auth, storage }

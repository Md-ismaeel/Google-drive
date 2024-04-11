
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAWJHju_wPG7fzfouTDpiATDGpCUSiQR8Q",
    authDomain: "drive-react-f5450.firebaseapp.com",
    projectId: "drive-react-f5450",
    storageBucket: "drive-react-f5450.appspot.com",
    messagingSenderId: "400960856101",
    appId: "1:400960856101:web:95ca0fcee3d7cb0c65dfcc"
};

// "firebase": "^8.10.1",
// "firebase-tools": "^13.7.1",

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }
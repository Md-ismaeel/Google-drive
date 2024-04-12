
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCSQJixJu8MMg2linzJOcpcFpIpdR6UXNM",
    authDomain: "drive-react-4255c.firebaseapp.com",
    projectId: "drive-react-4255c",
    storageBucket: "drive-react-4255c.appspot.com",
    messagingSenderId: "926952289144",
    appId: "1:926952289144:web:1e64c8ddb69a4ea375ce8d",
    measurementId: "G-WW4JTKZLJ6"
};



const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }

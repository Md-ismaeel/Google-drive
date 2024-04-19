
import firebase from 'firebase'

const firebaseConfig = {

    apiKey: "AIzaSyDyQXGbugR1vAKKQjpFXvICk__xVUu6acw",
    authDomain: "drive-38585.firebaseapp.com",
    projectId: "drive-38585",
    storageBucket: "drive-38585.appspot.com",
    messagingSenderId: "909215945697",
    appId: "1:909215945697:web:1bbf823a759fa14689f8a0",
    measurementId: "G-QSWXGWX4ZX"
};



const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }

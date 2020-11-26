import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

const config = {
  apiKey: "AIzaSyDeraumvbyJc8dgFrHYT9fAAjZgpJXYj_Y",
    authDomain: "hrh-clothing.firebaseapp.com",
    databaseURL: "https://hrh-clothing.firebaseio.com",
    projectId: "hrh-clothing",
    storageBucket: "hrh-clothing.appspot.com",
    messagingSenderId: "734644957363",
    appId: "1:734644957363:web:a978617082a5faee4800c6",
    measurementId: "G-MZ5GBRD6YL"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

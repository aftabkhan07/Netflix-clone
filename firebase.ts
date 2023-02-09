// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRIej8xZ5JtRw2gZS4G1GTR8CLgbNPVwQ",
    authDomain: "netflix-clone-cb648.firebaseapp.com",
    projectId: "netflix-clone-cb648",
    storageBucket: "netflix-clone-cb648.appspot.com",
    messagingSenderId: "879936044362",
    appId: "1:879936044362:web:651583295b0bfa0d65d5b3"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCBIUtvOFt6eJO2XZKFBDlEnuN2luQrfhY",
    authDomain: "olx-clone-aa404.firebaseapp.com",
    projectId: "olx-clone-aa404",
    storageBucket: "olx-clone-aa404.appspot.com",
    messagingSenderId: "901580796382",
    appId: "1:901580796382:web:4ff6f2edd7c633c9d56d4f",
    measurementId: "G-8TY0N849XD"
  };

 export default firebase.initializeApp(firebaseConfig)
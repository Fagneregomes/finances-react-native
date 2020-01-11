import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

let config = {
  apiKey: "AIzaSyAfShlAnQoSSaegK17_oe6D2zOJOIlyUeM",
  authDomain: "finances-b7dce.firebaseapp.com",
  databaseURL: "https://finances-b7dce.firebaseio.com",
  projectId: "finances-b7dce",
  storageBucket: "finances-b7dce.appspot.com",
  messagingSenderId: "752770016544",
  appId: "1:752770016544:web:6725f6fc3d3a4234056345",
  measurementId: "G-4ZM3QSBYD8"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
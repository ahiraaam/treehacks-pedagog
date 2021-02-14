import firebase from "firebase";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAp9NCJSdjy5m2RuOuDuOtMBC8fHcsfIuQ",
  authDomain: "pedagog-a5cda.firebaseapp.com",
  projectId: "pedagog-a5cda",
  storageBucket: "pedagog-a5cda.appspot.com",
  messagingSenderId: "957841158929",
  appId: "1:957841158929:web:8084e025d4a33339acd2b0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCbbgtH50TfEHINT8w2Rch9B8VwlVVhGwY",
  authDomain: "react-image-gallery-d6645.firebaseapp.com",
  projectId: "react-image-gallery-d6645",
  storageBucket: "react-image-gallery-d6645.appspot.com",
  messagingSenderId: "37873135186",
  appId: "1:37873135186:web:db76a26a8bee020d85b98b",
  measurementId: "G-HHD59R6BWE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;

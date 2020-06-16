import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQpeLi2lBr4_5yjpDR-QZo9C8iZMFL-90",
  authDomain: "kaizen-a134a.firebaseapp.com",
  databaseURL: "https://kaizen-a134a.firebaseio.com",
  projectId: "kaizen-a134a",
  storageBucket: "kaizen-a134a.appspot.com",
  messagingSenderId: "402201655354",
  appId: "1:402201655354:web:ff99880282055fc1811d03",
  measurementId: "G-73DVRD5526",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBp68NE3T3rDqhy9eqMyg-Fupk2SheAxv4",
    authDomain: "personalapp-93.firebaseapp.com",
    databaseURL: "https://personalapp-93.firebaseio.com",
    projectId: "personalapp-93",
    storageBucket: "",
    messagingSenderId: "509894404190"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase
import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDwlQ4HBwEF9RqrBVfG0mWozvG0zjlrD4g",
    authDomain: "todo-list-619c2.firebaseapp.com",
    databaseURL: "https://todo-list-619c2.firebaseio.com",
    projectId: "todo-list-619c2",
    storageBucket: "",
    messagingSenderId: "318992781490"
  };
  firebase.initializeApp(config);
  const db= firebase.firestore();

  export default db;
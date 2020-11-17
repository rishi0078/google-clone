import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDItpHjU6TeZiQUwS8hceXfyFAmB2KXoJE",
    authDomain: "udayy2-clon.firebaseapp.com",
    databaseURL: "https://udayy2-clon.firebaseio.com",
    projectId: "udayy2-clon",
    storageBucket: "udayy2-clon.appspot.com",
    messagingSenderId: "82274004492",
    appId: "1:82274004492:web:9f2383778df0510ea28829",
    measurementId: "G-XDDM77F3ZT"
  
});

 const db=firebaseApp.firestore();
 const auth=firebase.auth();

 export {db,auth};
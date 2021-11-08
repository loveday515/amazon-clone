// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHVlyMzMkeIu94Zw4hHvX9f3ghrGYx2r8",
    authDomain: "clone-5e655.firebaseapp.com",
    projectId: "clone-5e655",
    storageBucket: "clone-5e655.appspot.com",
    messagingSenderId: "24383764611",
    appId: "1:24383764611:web:6983849a1c033ba37e43b6",
    measurementId: "G-M370K3S136"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyACqOIcjffU7A8YmvJTmRlHEMIppVlM268",
    authDomain: "clone-4c33c.firebaseapp.com",
    projectId: "clone-4c33c",
    storageBucket: "clone-4c33c.appspot.com",
    messagingSenderId: "795468412493",
    appId: "1:795468412493:web:09244f1a09724fe142ce04",
    measurementId: "G-LZH9P8SJX4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
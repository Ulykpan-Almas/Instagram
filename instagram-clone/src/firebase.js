import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDU9xVuwcvPLCMYXsf-Nw9nitoPFdeAX44",
    authDomain: "instagram-clone-f4ffc.firebaseapp.com",
    projectId: "instagram-clone-f4ffc",
    storageBucket: "instagram-clone-f4ffc.appspot.com",
    messagingSenderId: "24230713295",
    appId: "1:24230713295:web:2612eafe0dc0071d69a4ba",
    measurementId: "G-CSM4KB6HE2"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage };  
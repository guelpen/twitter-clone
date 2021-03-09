import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDS1LqyfJFwzqE108XOnenswZeGl8VG1Nw",
    authDomain: "twitter-clone-f541b.firebaseapp.com",
    projectId: "twitter-clone-f541b",
    storageBucket: "twitter-clone-f541b.appspot.com",
    messagingSenderId: "631559640546",
    appId: "1:631559640546:web:4b8044d2787ccf905bd5bb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
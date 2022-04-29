import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBhiQ_iczOfcK1Qkw0GmWtBQGLzE_cnTHY",
    authDomain: "healthcare-app-7a14e.firebaseapp.com",
    projectId: "healthcare-app-7a14e",
    storageBucket: "healthcare-app-7a14e.appspot.com",
    messagingSenderId: "94823938225",
    appId: "1:94823938225:web:323d1c983c0f25040d8a90"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth };
  export default db;
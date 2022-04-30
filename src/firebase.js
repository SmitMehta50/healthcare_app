import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhiQ_iczOfcK1Qkw0GmWtBQGLzE_cnTHY",
    authDomain: "healthcare-app-7a14e.firebaseapp.com",
    projectId: "healthcare-app-7a14e",
    storageBucket: "healthcare-app-7a14e.appspot.com",
    messagingSenderId: "94823938225",
    appId: "1:94823938225:web:323d1c983c0f25040d8a90"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcOSGBZMzClypUQUQyp59WJqTY9cIauJU",
  authDomain: "netflix-clone-app-c2822.firebaseapp.com",
  projectId: "netflix-clone-app-c2822",
  storageBucket: "netflix-clone-app-c2822.appspot.com",
  messagingSenderId: "634726367412",
  appId: "1:634726367412:web:1bd44b16c377a9ddce17e1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEpr7TjUArU00v38cq7fD88ma8Yi7evzM",
  authDomain: "gocoronago-62c3e.firebaseapp.com",
  projectId: "gocoronago-62c3e",
  storageBucket: "gocoronago-62c3e.appspot.com",
  messagingSenderId: "992732880836",
  appId: "1:992732880836:web:7382c945912645938c0e91",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;

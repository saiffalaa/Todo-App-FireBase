import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXJMPqw9YIZug3sg5o4ad_wzP5Z1BbEL8",
  authDomain: "todo-app-cp-10946.firebaseapp.com",
  projectId: "todo-app-cp-10946",
  storageBucket: "todo-app-cp-10946.appspot.com",
  messagingSenderId: "606485909159",
  appId: "1:606485909159:web:59f49db492de6e11e55582",
  measurementId: "G-GB0XS9YDH5",
});
const db = firebaseApp.firestore();
export default db;

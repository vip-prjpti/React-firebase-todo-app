// const firebaseConfig = {
//   apiKey: "AIzaSyCaLTZ96XUSqVKKM4Sj4c2ONEvWd-qvChs",
//   authDomain: "todo-app-627e1.firebaseapp.com",
//   projectId: "todo-app-627e1",
//   storageBucket: "todo-app-627e1.appspot.com",
//   messagingSenderId: "941864981438",
//   appId: "1:941864981438:web:3439879d47a94af68b5fef",
//   measurementId: "G-BK1WBGQNXW",
// };

// import firebase from "firebase";
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCaLTZ96XUSqVKKM4Sj4c2ONEvWd-qvChs",
  authDomain: "todo-app-627e1.firebaseapp.com",
  projectId: "todo-app-627e1",
  storageBucket: "todo-app-627e1.appspot.com",
  messagingSenderId: "941864981438",
  appId: "1:941864981438:web:3439879d47a94af68b5fef",
  measurementId: "G-BK1WBGQNXW"
});

const db = firebaseApp.firestore();

export default db; 
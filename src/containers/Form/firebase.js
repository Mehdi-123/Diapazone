import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4p6kTbmqMd1P4UfXT0biPKvsLhPj6H2o",
  authDomain: "diapazone-a6ccf.firebaseapp.com",
  projectId: "diapazone-a6ccf",
  storageBucket: "diapazone-a6ccf.appspot.com",
  messagingSenderId: "907892567429",
  appId: "1:907892567429:web:ce05f918cdfa6f4134e8ec",
  measurementId: "G-B2FGGW0HVQ",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

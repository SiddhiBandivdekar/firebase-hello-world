import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPsmjo69RzUkB8q01XvDvEAWzZskIcKMM",
  authDomain: "hello-world-a313c.firebaseapp.com",
  projectId: "hello-world-a313c",
  storageBucket: "hello-world-a313c.appspot.com",
  messagingSenderId: "889025655995",
  appId: "1:889025655995:web:8ebcb4f4123ee77711259e",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

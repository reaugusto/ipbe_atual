import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfkfSuX9aQCr_2sGEH2bsXQZsNJrj0Jqg",
  authDomain: "ipbetel-vgp.firebaseapp.com",
  projectId: "ipbetel-vgp",
  storageBucket: "ipbetel-vgp.appspot.com",
  messagingSenderId: "221105237143",
  appId: "1:221105237143:web:89e27b965eb20234c48dd2"
};

// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore;

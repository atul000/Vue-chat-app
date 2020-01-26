import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCnr-J6fPjbrgH_8i7DD4A4HVDkRhDa0RM",
  authDomain: "contactapp-57bc8.firebaseapp.com",
  databaseURL: "https://contactapp-57bc8.firebaseio.com",
  projectId: "contactapp-57bc8",
  storageBucket: "contactapp-57bc8.appspot.com",
  messagingSenderId: "59758424740",
  appId: "1:59758424740:web:515efe2d0451cee5"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

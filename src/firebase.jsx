
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7LRb9IzD047WYzJ5mRxsJhSTEDRZkFaA",
    authDomain: "fun-food-friends-2029a.firebaseapp.com",
    databaseURL: "https://fun-food-friends-2029a.firebaseio.com",
    projectId: "fun-food-friends-2029a",
    storageBucket: "fun-food-friends-2029a.appspot.com",
    messagingSenderId: "3692016979",
    appId: "1:3692016979:web:856cab45511473b9689da6",
    measurementId: "G-WE946HWVQQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;

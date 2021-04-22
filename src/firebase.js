import firebase from 'firebase';
import "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCvB_NODbusHww7rOp6q8HoQZLsNG4H4gc",
    authDomain: "pine-valley-7820d.firebaseapp.com",
    projectId: "pine-valley-7820d",
    storageBucket: "pine-valley-7820d.appspot.com",
    messagingSenderId: "319816114603",
    appId: "1:319816114603:web:5672a131d5c0e0a240f2ee",
    measurementId: "G-PVR671CYJB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const rdb = firebase.database();
export const storage = firebase.storage();

export default firebase;


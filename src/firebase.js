import firebase from 'firebase';
import "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const rdb = firebase.database();
export const storage = firebase.storage();

export default firebase;


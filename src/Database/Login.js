import firebase from 'firebase'
import { addDoc } from './addDoc';

export default async function login() {

    var provider = new firebase.auth.GoogleAuthProvider();

    try {
        const result = await firebase.auth()
            .signInWithRedirect(provider);

            var temp = null

            if(result.user.phoneNumber){
                temp = result.user.phoneNumber
            }

        addDoc("Users", result.user.uid, {
            name: result.user.displayName,
            email: result.user.email,
            phone: temp,
            photo: result.user.photoURL,
            uid: result.user.uid
        })
    } catch (error) {
        alert(error.message)
    }
}
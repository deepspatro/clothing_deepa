import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVdZvsX8WGknZHfa_kQiY1NbKb_kE4b6k",
    authDomain: "clothing-db-d5529.firebaseapp.com",
    databaseURL: "https://clothing-db-d5529.firebaseio.com",
    projectId: "clothing-db-d5529",
    storageBucket: "clothing-db-d5529.appspot.com",
    messagingSenderId: "510589052324",
    appId: "1:510589052324:web:b7d56c65c1cb9ef990cd31",
    measurementId: "G-M19ESDRJ63"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

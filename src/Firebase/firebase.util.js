import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBiE2sybd5LHVmZHSmg13Wm2EH_rwe3pUM",
    authDomain: "crwn-db-b70bd.firebaseapp.com",
    projectId: "crwn-db-b70bd",
    storageBucket: "crwn-db-b70bd.appspot.com",
    messagingSenderId: "966516447278",
    appId: "1:966516447278:web:3fe8f67595d7f4996b67bf",
    measurementId: "G-NGVB2EH3ZC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvrp8jqTNmuWsAXwDW5Qqn3rxQYZ2xGqs",
    authDomain: "e-commercedb-b0c77.firebaseapp.com",
    databaseURL: "https://e-commercedb-b0c77.firebaseio.com",
    projectId: "e-commercedb-b0c77",
    storageBucket: "e-commercedb-b0c77.appspot.com",
    messagingSenderId: "16693978951",
    appId: "1:16693978951:web:1e8b22226ce0d445120e62",
    measurementId: "G-QX1Z6RZGX5"
};


export const createUserProfileDocument = async( userAuth, additionalData ) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {

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

            console.log('There is an error creating a user', error.message);

        }

    }

    return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




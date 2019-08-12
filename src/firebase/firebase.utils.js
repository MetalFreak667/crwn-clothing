import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwI1pMz5Ki2EPCQFH86C8_5J2ktLGfPFQ",
    authDomain: "react-learning-db.firebaseapp.com",
    databaseURL: "https://react-learning-db.firebaseio.com",
    projectId: "react-learning-db",
    storageBucket: "",
    messagingSenderId: "512953182335",
    appId: "1:512953182335:web:6de55f7edcda3db2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;    

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists)
    {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error)
        {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
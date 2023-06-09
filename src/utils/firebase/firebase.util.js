
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth"

import { getFirestore, getDoc, setDoc, doc } from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyBc8_EanWCMpjqxHZt4vu17y06cgyd8MBg",

    authDomain: "fir-4e59a.firebaseapp.com",

    projectId: "fir-4e59a",

    storageBucket: "fir-4e59a.appspot.com",

    messagingSenderId: "371515150052",

    appId: "1:371515150052:web:e27d1aca764f6172cf66f1"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    console.log(userAuth.user.uid);
    const userDocRef = doc(db, 'users', userAuth.user.uid)
    const userSnapshot = await getDoc(userDocRef)
    console.log("/////////////");
    console.log(userDocRef);
    console.log(userSnapshot);

    if (!userSnapshot.exists())
    {
        const {displayName, email} = userAuth.user
        const createdAt = new Date()
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
        })
    }
    return userDocRef

}







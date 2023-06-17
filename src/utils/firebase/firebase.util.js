
import { initializeApp } from "firebase/app";

import { getAuth,
     GoogleAuthProvider,
      signInWithPopup, 
      signInWithRedirect , 
      createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, 
    onAuthStateChanged
    } from "firebase/auth"

import { getFirestore, getDoc, setDoc, doc, collection, writeBatch, query, getDocs } from 'firebase/firestore'


import { UserContext } from "../../contexts/user.context";

import { useContext } from "react";


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

export const createUserDocumentFromAuth = async (userAuth,additionalInfo={}) => {
    if (!userAuth) return
    // console.log(userAuth.user.uid);
    // additionalInfo={}
    // const userDocRef = doc(db, 'users', userAuth.user.uid)
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    console.log("/////////////");
    console.log(userDocRef);
    console.log(userSnapshot);

    if (!userSnapshot.exists())
    {
        const {displayName, email} = userAuth
        
        const createdAt = new Date()
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInfo
        })
    }
    // return userDocRef   // to use in  saga now we return userSnapshot
    return userSnapshot

}



export const createUserAuthWithEmailAndPassword=  (email, password)=>{
    if (!email || !password) return
    return  createUserWithEmailAndPassword(auth,email,password)


}




export const signInAuthWithEmailAndPassword=  (email, password)=>{
    if (!email || !password) return
    return  signInWithEmailAndPassword(auth,email,password)


}



export const signOutUser = async ()=> await signOut(auth)



export const onAuthStateChangedLister = (callback)=>{

    onAuthStateChanged(auth,callback)

} 
    

export const addCollectionsAndDocuments = async (collectionKey, objects)=>{
    const collectionRef = collection(db,collectionKey)
    const batch = writeBatch(db)
    objects.forEach((object)=>{
        const docRef= doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef,object)
    })

    await batch.commit()
    console.log("/////////////////DONE");

}




export const getCategoriesAndDocuments = async()=>{
    const collectionRef = collection(db,'categories')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{  
        
        const {title , items } = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc

    },{})

    return categoryMap
}


// this is for removing  onAuthStateChangedLister in app.js  to use saga check app.js

export const getCurrentUser = ()=>{
    return new Promise((resolve, reject)=>{
        const unsubscribe = onAuthStateChanged(
            auth, 
            (userAuth)=>{
                unsubscribe()
                console.log("@@@@@@@@in get  current user", userAuth);
                resolve(userAuth)
            }, 
            reject
        )

    })
}

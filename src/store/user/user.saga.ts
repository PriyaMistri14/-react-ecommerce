// import {all,call, takeLatest, put, take} from 'redux-saga/effects'
import { takeLatest,all, call, put } from "typed-redux-saga"

import { USER_ACTIONS } from './user.type'

import { getCurrentUser, createUserDocumentFromAuth , signInWithGooglePopup, signInAuthWithEmailAndPassword, createUserAuthWithEmailAndPassword, signOutUser} from '../../utils/firebase/firebase.util'
import { signInFailed, signInSuccess, signUpSuccess ,signUpFailed, signOutFailed, signOutSuccess} from './user.action'

import { User } from '@firebase/auth'

import { AdditionalInfo } from './user.action'
import { AnyAction } from "redux"


export function* getSnapshotFromUserAuth(userAuth:User, additionalInfo:AdditionalInfo){
    console.log("calleddddddd", userAuth, additionalInfo);

    try{
        const userSnapshot= yield* call(createUserDocumentFromAuth, userAuth, additionalInfo)
        console.log("AAAAAAAAAAAAAAAAAAAA userSnapshot",userSnapshot);

        if(userSnapshot)
        {       

        yield* put(signInSuccess({id:userSnapshot.id, ...userSnapshot.data()}))
        }

    }catch(error){
        yield* put(signInFailed(error as Error))
    }
}


export function* isUserAuthenticated(){
    try{
        const userAuth = yield* call(getCurrentUser)
        console.log("@@@@userAuth", userAuth);
        if(!userAuth) return
        console.log("@@@@userAuth.user", userAuth);
        yield* call(getSnapshotFromUserAuth, userAuth,{})


    }catch(error){
        yield* put(signInFailed(error as Error))

    }
}


//....................

export function* signUp(action:AnyAction){

    const{payload:{email,password, displayName}} = action

try{
    const {user} = yield call(createUserAuthWithEmailAndPassword, email, password)
    console.log("@@@???? in sign up user", user);
    yield* put(signUpSuccess(user,{displayName}))

}catch(error){
    yield* put(signUpFailed(error as Error))
}

}


type Payload={
    user:User,
    additionalInfo:AdditionalInfo
}


export function* signInAfterSignUp(action:AnyAction){
    const {payload:{user, additionalInfo}} = action
    console.log("@@@???? in sign in after sign up user", user, additionalInfo);
 yield* call(getSnapshotFromUserAuth, user, additionalInfo)
}






export function* signInWithEmail(action: AnyAction){
   const {payload:{email, password}} = action
    try{
        const {user}=  yield call(signInAuthWithEmailAndPassword, email, password)
    console.log("????????????????????", user, email, password);
        yield* call(getSnapshotFromUserAuth, user,{})

    }catch(error){
        yield* put(signInFailed(error as Error))

    }
}



export function* signInWithGoogle(){
    try{
       const {user} = yield* call(signInWithGooglePopup)
       yield* call(getSnapshotFromUserAuth, user,{})

    }catch(error){
        yield* put(signInFailed(error as Error))
    }
}


export function* signOut(){
    try{
        yield* call(signOutUser)
        yield* put(signOutSuccess())

    }catch(error){
        yield* put(signOutFailed(error as Error))
    }

}





//....................

export function* onSignUpStart(){
    yield* takeLatest(USER_ACTIONS.SIGN_UP_START, signUp)
}

 export function* onSignUpSuccess(){
    yield* takeLatest(USER_ACTIONS.SIGN_UP_SUCCESS, signInAfterSignUp)
 }



 export function* onEmailSignInStart(){
    yield* takeLatest(USER_ACTIONS.EMAIL_SIGN_IN_START, signInWithEmail)
 }



export function* onGoogleSignInStart(){
    yield* takeLatest(USER_ACTIONS.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* onCheckUserSession(){
    yield* takeLatest(USER_ACTIONS.CHECK_USER_SESSION,isUserAuthenticated )
}


export function* onSignOutStart(){
    yield* takeLatest(USER_ACTIONS.SIGN_OUT_START, signOut)
}


export function* userSagas(){
    yield* all([call(onCheckUserSession),
         call(onGoogleSignInStart),
          call(onEmailSignInStart),
          call(onSignUpStart),
          call(onSignUpSuccess),
          call(onSignOutStart)
        
        ])
}
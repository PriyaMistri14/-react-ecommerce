import {all,call, takeLatest, put, take} from 'redux-saga/effects'

import { USER_ACTIONS } from './user.type'

import { getCurrentUser, createUserDocumentFromAuth , signInWithGooglePopup, signInAuthWithEmailAndPassword, createUserAuthWithEmailAndPassword, signOutUser} from '../../utils/firebase/firebase.util'
import { signInFailed, signInSuccess, signUpSuccess ,signUpFailed, signOutFailed, signOutSuccess} from './user.action'


export function* getSnapshotFromUserAuth(userAuth, additionalInfo){
    console.log("calleddddddd", userAuth, additionalInfo);

    try{
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalInfo)

       yield put(signInSuccess({id:userSnapshot.id, ...userSnapshot.data()}))


    }catch(error){
        yield put(signInFailed(error))
    }
}


export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser)
        console.log("@@@@userAuth", userAuth);
        if(!userAuth) return
        console.log("@@@@userAuth.user", userAuth);
        yield call(getSnapshotFromUserAuth, userAuth)


    }catch(error){
        yield put(signInFailed(error))

    }
}


//....................

export function* signUp({payload:{email, password, displayName}}){
try{
    const {user} = yield call(createUserAuthWithEmailAndPassword, email, password)
    console.log("@@@???? in sign up user", user);
    yield put(signUpSuccess(user,{displayName}))

}catch(error){
    yield put(signUpFailed(error))
}

}


export function* signInAfterSignUp({payload:{user, additionalInfo}}){
    console.log("@@@???? in sign in after sign up user", user, additionalInfo);
 yield call(getSnapshotFromUserAuth, user, additionalInfo)
}






export function* signInWithEmail({payload:{email,password}}){
   
    try{
        const {user}=  yield call(signInAuthWithEmailAndPassword, email, password)
    console.log("????????????????????", user, email, password);
        yield call(getSnapshotFromUserAuth, user)

    }catch(error){
        yield put(signInFailed(error))

    }
}



export function* signInWithGoogle(){
    try{
       const {user} = yield call(signInWithGooglePopup)
       yield call(getSnapshotFromUserAuth, user)

    }catch(error){
        yield put(signInFailed(error))
    }
}


export function* signOut(){
    try{
        yield call(signOutUser)
        yield put(signOutSuccess())

    }catch(error){
        yield put(signOutFailed(error))
    }

}





//....................

export function* onSignUpStart(){
    yield takeLatest(USER_ACTIONS.SIGN_UP_START, signUp)
}

 export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTIONS.SIGN_UP_SUCCESS, signInAfterSignUp)
 }



 export function* onEmailSignInStart(){
    yield takeLatest(USER_ACTIONS.EMAIL_SIGN_IN_START, signInWithEmail)
 }



export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTIONS.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* onCheckUserSession(){
    yield takeLatest(USER_ACTIONS.CHECK_USER_SESSION,isUserAuthenticated )
}


export function* onSignOutStart(){
    yield takeLatest(USER_ACTIONS.SIGN_OUT_START, signOut)
}


export function* userSagas(){
    yield all([call(onCheckUserSession),
         call(onGoogleSignInStart),
          call(onEmailSignInStart),
          call(onSignUpStart),
          call(onSignUpSuccess),
          call(onSignOutStart)
        
        ])
}
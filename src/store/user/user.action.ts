 import { type } from "@testing-library/user-event/dist/type"
import { USER_ACTIONS } from "./user.type"

import { User } from "@firebase/auth"
import { UserData } from "../../utils/firebase/firebase.util"



export type AdditionalInfo={
    displayName?: string
}



export const setCurrentUser = (user:User)=>{
    return ({type:USER_ACTIONS.SET_CURRENT_USER, payload:user})

}





export const  checkUserSession =()=>{ return ({type:USER_ACTIONS.CHECK_USER_SESSION})}


export const  googleSignInStart =()=>{ return ({type:USER_ACTIONS.GOOGLE_SIGN_IN_START})}


export const  emailSignInStart =(email:string, password:string)=>{ return ({type:USER_ACTIONS.EMAIL_SIGN_IN_START , payload:{email,password}})}

export const  signInSuccess =(user:UserData & {id:string})=>{ return ({type:USER_ACTIONS.SIGN_IN_SUCCESS, payload:user})}


export const  signInFailed =(error:Error)=>{ return ({type:USER_ACTIONS.SIGN_IN_FAILED, payload:error})}


export const signUpStart = (email:string, password:string, displayName:string)=>{return ({type:USER_ACTIONS.SIGN_UP_START, payload:{email, password, displayName}})}


export const signUpSuccess = (user:User, additionalInfo:AdditionalInfo)=>{ return ({type:USER_ACTIONS.SIGN_UP_SUCCESS,payload:{user, additionalInfo}}) }

export const signUpFailed = (error:Error) =>{return ({type:USER_ACTIONS.SIGN_UP_FAILED, payload:error}) }

export const signOutStart = ()=>{return ({type:USER_ACTIONS.SIGN_OUT_START}) }

export const signOutSuccess = ()=>{return ({type:USER_ACTIONS.SIGN_OUT_SUCCESS}) }


export const signOutFailed = (error:Error)=>{return ({type:USER_ACTIONS.SIGN_OUT_FAILED, payload:error}) }




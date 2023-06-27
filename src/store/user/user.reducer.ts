import { USER_ACTIONS } from "./user.type";

import { User } from "@firebase/auth";
import { AnyAction } from "redux";


import { UserData } from "../../utils/firebase/firebase.util";


// export const USER_ACTIONS = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

export type UserState = {
    readonly currentUser:UserData | null,
    readonly isLoding:boolean,
    readonly error:Error | null
}


const INITIAL_STATE:UserState = {
    currentUser: null,
    isLoding: false,
    error: null
}


export const userReducer = (state = INITIAL_STATE, action:AnyAction) => {
    console.log("././././././././././././././. userReducer is called");
    // const { type, payload } = action
    // first 2 case do same work but second is used for saga

    switch (action.type) {
        case USER_ACTIONS.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        case USER_ACTIONS.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }

        case USER_ACTIONS.SIGN_IN_FAILED:
        case USER_ACTIONS.SIGN_UP_FAILED:
        case USER_ACTIONS.SIGN_OUT_FAILED:
            return {
                ...state,
                error: action.payload
            }
            
        case USER_ACTIONS.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser:null
            }    
        default:
            return state

    }

}


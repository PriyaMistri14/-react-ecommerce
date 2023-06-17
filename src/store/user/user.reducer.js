import { USER_ACTIONS } from "./user.type";



// export const USER_ACTIONS = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }


const INITIAL_STATE = {
    currentUser: null,
    isLoding: false,
    error: null
}


export const userReducer = (state = INITIAL_STATE, action) => {
    console.log("././././././././././././././. userReducer is called");
    const { type, payload } = action
    // first 2 case do same work but second is used for saga

    switch (type) {
        case USER_ACTIONS.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }

        case USER_ACTIONS.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload
            }

        case USER_ACTIONS.SIGN_IN_FAILED:
        case USER_ACTIONS.SIGN_UP_FAILED:
        case USER_ACTIONS.SIGN_OUT_FAILED:
            return {
                ...state,
                error: payload
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


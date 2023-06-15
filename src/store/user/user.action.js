 import { USER_ACTIONS } from "./user.type"

export const setCurrentUser = (user)=>{
    return ({type:USER_ACTIONS.SET_CURRENT_USER, payload:user})

}

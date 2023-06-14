
import { createContext, useState, useEffect, useReducer } from "react";

import { onAuthStateChangedLister } from "../utils/firebase/firebase.util";

import { signOutUser } from "../utils/firebase/firebase.util";


export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
})

export const USER_ACTIONS = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}


const userReducer = (state, action) => {
    console.log("././././././././././././././. userReducer is called");
    const { type, payload } = action

    switch (type) {
        case USER_ACTIONS.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`There is an error for this type ${type}`)

    }

}

const INITIAL_STATE ={
    currentUser:null
}



export const UserProvider = ({ children }) => {

    // const [currentUser, setCurrentUser] = useState(null)   // this is used in simple context but to use reducer this line is commented, to remove reducer just uncomment this line

const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

const {currentUser} = state

const setCurrentUser = (user)=>{
    dispatch({type:USER_ACTIONS.SET_CURRENT_USER, payload:user})

}

console.log("////CURRENT USER////", currentUser);

    const value = { currentUser, setCurrentUser }

    // ...................for auth change.............

    useEffect(() => {
        signOutUser()


        var res = onAuthStateChangedLister((user) => {
            setCurrentUser(user)
            console.log("....................../////////////", user);

        })
        console.log("....................../////////////", res);

        return res




    }, [])







    return <UserContext.Provider value={value}>{children}</UserContext.Provider>




}







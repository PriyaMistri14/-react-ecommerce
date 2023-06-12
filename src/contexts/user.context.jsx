
import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedLister } from "../utils/firebase/firebase.util";

import { signOutUser } from "../utils/firebase/firebase.util";


export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
})



export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)

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







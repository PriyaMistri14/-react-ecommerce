import { async } from "@firebase/util"
import { signInWithGooglePopup } from "../../utils/firebase/firebase.util"

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.util"

import SignUp from "../../components/signUp/signUp.component"
import SignIn from "../../components/signIn/signIn.component"


import { UserContext } from "../../contexts/user.context"
import { useContext } from "react"

const Auth = () => {

    const {setCurrentUser} = useContext(UserContext)

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
       const userDocRef=  await createUserDocumentFromAuth(response)

       setCurrentUser(response.user)

        console.log(userDocRef);
        console.log("..................");
        console.log(response);
    }



    return (

        <div><p>This is sign in page</p>
            <button onClick={logGoogleUser}> sign in with google</button>
            <SignUp />
            <SignIn />
        </div>
    )


}

export default Auth
import { async } from "@firebase/util"
import { signInWithGooglePopup } from "../../utils/firebase/firebase.util"

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.util"

import SignUp from "../../components/signUp/signUp.component"


const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
       const userDocRef=  await createUserDocumentFromAuth(response)

        console.log(userDocRef);
        console.log("..................");
        console.log(response);
    }



    return (

        <div><p>This is sign in page</p>
            <button onClick={logGoogleUser}> sign in with google</button>
            <SignUp />
        </div>
    )


}

export default SignIn
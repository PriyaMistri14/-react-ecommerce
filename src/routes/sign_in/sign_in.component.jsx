
// import { signInWithGooglePopup } from "../../utils/firebase/firebase.util"

// import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.util"

import SignUp from "../../components/signUp/signUp.component"
import SignIn from "../../components/signIn/signIn.component"


// import { UserContext } from "../../contexts/user.context"
// import { useContext } from "react"

// import ButtonComponent from "../../components/button/button.component"


import './sign_in.styles.css'

const Auth = () => {

    // const {setCurrentUser} = useContext(UserContext)

    // const logGoogleUser = async () => {
    //     const response = await signInWithGooglePopup()
    //    const userDocRef=  await createUserDocumentFromAuth(response)

    //    setCurrentUser(response.user)

    //     console.log(userDocRef);
    //     console.log("..................");
    //     console.log(response);
    // }



    return (

        <div>
            {/* <button onClick={logGoogleUser}> sign in with google</button> */}

            <div className="container">
            <SignUp />
            <SignIn />           
            </div>
            {/* <ButtonComponent onClick={logGoogleUser} /> */}
        </div>
    )


}

export default Auth
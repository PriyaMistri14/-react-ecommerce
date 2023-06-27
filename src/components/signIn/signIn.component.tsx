
import { useState } from "react"

import { createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.util"


import FormInput from "../formInput/formInput.component"

import ButtonComponent from "../button/button.component"

// import { UserContext } from "../../contexts/user.context"
import { useContext } from "react"


import './signIn.styles.css'

//  import { signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.util"
import { signInWithGooglePopup } from "../../utils/firebase/firebase.util"

import { useDispatch } from "react-redux"
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action"



import { ChangeEvent, FormEvent } from "react"

import { AuthError, AuthErrorCodes } from "@firebase/auth"


const SignIn = () => {
    const defaultFormField = {

        email: '',
        password: ''

    }
    const [formField, setFormField] = useState(defaultFormField)

    // const { setCurrentUser } = useContext(UserContext)


    // const { displayName, email, password, confirmPassword } = { formField }


    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormField({ ...formField, [name]: value })

    }
    const resetFormField = () => {

        setFormField(defaultFormField)
    }




    const onSubmitHandler = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // alert(event.target )
        console.log(formField);
        const { email, password } = formField



        try {
            // const res = await signInAuthWithEmailAndPassword(email, password) // for use of saga
           
            // setCurrentUser(res.user)      //centralize this using onAuthchange if remove onAuthchange then uncomment this line
    dispatch(emailSignInStart(email, password))

        }
        catch (error ) {
            if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD) {

                alert("Invalid user or password!!")
            }
            else if ((error as AuthError).code === AuthErrorCodes.NULL_USER) {

                alert("No user found for this email , please sign up first!!")
            }
            else {
                alert("There is an error in  sign in of user!")
            }


            console.log("There is an error in  sign in of user!", (error as AuthError).message)




        }



    }




    const { email, password } =  formField 

    // ..................................................sign in using google.....................
    // const {setCurrentUser} = useContext(UserContext)


    const dispatch = useDispatch()

    const logGoogleUser = () => {
        // const response = await signInWithGooglePopup()     //  this 2 lines are commented to use saga
        // const userDocRef = await createUserDocumentFromAuth(response)

        // use saga

        dispatch(googleSignInStart())


        // setCurrentUser(response.user)   //centralize this using onAuthchange if remove onAuthchange then uncomment this line


    }






    return (

        <div><h2>Sign In using your email and password</h2>
            <div className="form-container">
                <form onSubmit={onSubmitHandler}>



                    <FormInput label='Email:'
                        type='text'
                        required name='email'
                        value={email}
                        onChange={onChangeHandler} />



                    <FormInput label='Password: '
                        type='password'
                        required name='password'
                        value={password}
                        onChange={onChangeHandler} />







                    {/* <label>Display Name:</label>
                <input type='text' required name='displayName' value={displayName} onChange={onChangeHandler} /><br /><br />

                <label>Email: </label>
                <input type='email' required name='email' value={email} onChange={onChangeHandler} /><br /><br />

                <label>Password: </label>
                <input type='password' required name='password' value={password} onChange={onChangeHandler} /><br /><br />

                <label>Confirm Password: </label>
                <input type='password' required name='confirmPassword' value={confirmPassword} onChange={onChangeHandler} /><br /><br /> */}



                    {/* <button type="submit"> Sign Up</button><br /><br /> */}

                    <div className="sign-in-button-container">
                        <ButtonComponent children='Sign In' type='submit' />
                        <ButtonComponent children='Sign In With Google' onClick={logGoogleUser} />
                    </div>


                </form>
            </div>
        </div>




    )

}


export default SignIn
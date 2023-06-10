
import { useState } from "react"

import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.util"


import FormInput from "../formInput/formInput.component"

import ButtonComponent from "../button/button.component"

import { UserContext } from "../../contexts/user.context"
import { useContext } from "react"




const SignIn = () => {
    const defaultFormField = {

        email: '',
        password: ''

    }
    const [formField, setFormField] = useState(defaultFormField)

    const {setCurrentUser} = useContext(UserContext)


    // const { displayName, email, password, confirmPassword } = { formField }


    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFormField({ ...formField, [name]: value })

    }
    const resetFormField = () => {

        setFormField(defaultFormField)
    }




    const onSubmitHandler = async (event) => {
        event.preventDefault()
        // alert(event.target )
        console.log(formField);
        const { email, password } = formField



        try {
            const res = await signInAuthWithEmailAndPassword(email, password)
            console.log("//////res",res);
           setCurrentUser(res.user)


        }
        catch (error) {
            if(error.code == 'auth/wrong-password'){

                alert("Invalid user or password!!")
            }
            else  if(error.code == 'auth/user-not-found'){

                alert("No user found for this email , please sign up first!!")
            }
            else{
                alert("There is an error in  sign in of user!")
            }


            console.log("There is an error in  sign in of user!", error.message)




        }



    }




    const { email, password } = { formField }

    return (

        <div><h1>Sign Up using your email and password</h1>
            <form onSubmit={onSubmitHandler}>



                <FormInput label='Email:'
                    type='text'
                    required name='email'
                    value={email}
                    onChange={onChangeHandler} />



                <FormInput label='Password: '
                    type='text'
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


                <ButtonComponent children='Sign In' type='submit'/>



            </form>
        </div>




    )

}


export default SignIn
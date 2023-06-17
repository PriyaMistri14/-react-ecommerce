
import { useState } from "react"

import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util"


import FormInput from "../formInput/formInput.component"

import ButtonComponent from "../button/button.component"


import { UserContext } from "../../contexts/user.context"
import { useContext } from "react"



import { useDispatch } from "react-redux"
 import { signUpStart } from "../../store/user/user.action"


const SignUp = () => {
    const defaultFormField = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formField, setFormField] = useState(defaultFormField)

    const {setCurrentUser} = useContext(UserContext)

    // const { displayName, email, password, confirmPassword } = { formField }

  const dispatch = useDispatch()
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
        const { displayName, email, password, confirmPassword } = formField
        console.log(displayName);

        if (password !== confirmPassword) {
            alert("password and confirm password not match!")
            return
        }
        try {

            // const response = await createUserAuthWithEmailAndPassword(email, password)  // this lines are commented to use saga

            // const res = await createUserDocumentFromAuth(response, { displayName })
            resetFormField()
           
            dispatch(signUpStart(email, password, displayName))
            
            
            // setCurrentUser(response.user)   //centralize this using onAuthchange if remove onAuthchange then uncomment this line


        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("User already exits!")
            }

            if (error.code === 'auth/weak-password') {
                alert('Password should be at least 6 characters')

            }
            else {
                alert("There is an error in creation of user!")
                console.log("There is an error in creation of user!", error.message)
            }



        }



    }




    const { displayName, email, password, confirmPassword } = { formField }

    return (

        <div><h2>Sign Up using your email and password</h2>
            <form onSubmit={onSubmitHandler}>
                <FormInput label='Display Name:'
                    type='text'
                    required name='displayName'
                    value={displayName}
                    onChange={onChangeHandler} />



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





                <FormInput label='Confirm Password:'
                    type='password'
                    required name='confirmPassword'
                    value={confirmPassword}
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


                <ButtonComponent children='Sign Up' type='submit' />



            </form>
        </div>




    )

}


export default SignUp
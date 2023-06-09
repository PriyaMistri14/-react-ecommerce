
import { useState } from "react"


const SignUp = () => {
    const defaultFormField={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }
const [formField, setFormField] = useState(defaultFormField)



const onChangeHandler= (event)=>{
    const {name, value} = event.target   
    setFormField({ ...formField, [name]:value})    

}


const {displayName,email,password,confirmPassword} = {formField}

    return (
        <div><h1>Sign Up using your email and password</h1>
            <form onSubmit={()=>{}}>
                <label>Display Name:</label>
                <input type='text' required name='displayName' value={displayName} onChange={onChangeHandler}/><br/><br/>

                <label>Email: </label>
                <input type='email' required  name='email' value={email} onChange={onChangeHandler} /><br/><br/>

                <label>Password: </label>
                <input type='password' required name='password' value={password} onChange={onChangeHandler} /><br/><br/>

                <label>Confirm Password: </label>
                <input type='password' required name='confirmPassword' value={confirmPassword} onChange={onChangeHandler} /><br/><br/>

                <button type="submit"> Sign Up</button><br/><br/>



            </form>
        </div>




    )

}


export default SignUp

import { FC } from "react"
// import { FormHTMLAttributes } from "react"

import { InputHTMLAttributes } from "react"

export type FormInputProps={
    label:string
} & InputHTMLAttributes<HTMLInputElement> 


const FormInput:FC<FormInputProps> = ({ label, ...otherProps }) => {

    return (
        <div>

            <label>{label}</label>
            <input {...otherProps}/>
            <br/><br/>
            
            </div>

    )


}

export default FormInput
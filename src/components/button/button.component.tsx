import './button.styles.css'

import { HTMLAttributes } from 'react'
import { ButtonHTMLAttributes } from 'react'

import { FC } from 'react'

export type ButtonProps ={

} & ButtonHTMLAttributes<HTMLButtonElement>


const ButtonComponent: FC<ButtonProps>  =  ({children,...otherProps})=>{
    return(
        <button {...otherProps} className='button-container'>{children}</button>
    )



}

export default ButtonComponent
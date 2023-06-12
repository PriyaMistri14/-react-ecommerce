import './button.styles.css'

const ButtonComponent= ({children,...otherProps})=>{
    return(
        <button {...otherProps} className='button-container'>{children}</button>
    )



}

export default ButtonComponent
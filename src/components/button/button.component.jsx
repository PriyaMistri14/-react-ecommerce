

const ButtonComponent= ({children,...otherProps})=>{
    return(
        <button {...otherProps}>{children}</button>
    )



}

export default ButtonComponent
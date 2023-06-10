
const FormInput = ({ label, ...otherProps }) => {

    return (
        <div>

            <label>{label}</label>
            <input {...otherProps}/>
            <br/><br/>
            
            </div>

    )


}

export default FormInput
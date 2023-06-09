import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.css'



// import { Link } from "react-router-dom";

const Navigation = ()=>{
return(
    <Fragment>
        <div className="navigation">        
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
              </Link>
            
       
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>SHOP NOW</Link>
            <Link className="nav-link" to='/sign_in'>SIGN IN</Link>

        </div>
        </div>
      
        <Outlet/>
    </Fragment>
)

}


export default Navigation
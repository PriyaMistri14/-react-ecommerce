import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.css'


import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";


import { signOutUser } from "../../utils/firebase/firebase.util";


import CardIcon from "../../components/card-icon/card-icon.component";

import CardDrpdown from "../../components/card-dropdown/card-dropdown.component";


import { CartContext } from "../../contexts/cart.context";




// import { Link } from "react-router-dom";

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext)
    console.log("current user:", currentUser);

    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
 

    const onSignOutHAndler = async () => {
        const res = await signOutUser()
        console.log("after sign out", res);
        // setCurrentUser(null)       //centralize this using onAuthchange if remove onAuthchange then uncomment this line 
    }


    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo" />
                </Link>


                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP NOW</Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={onSignOutHAndler}>SIGN OUT</span>) :
                            (<Link className="nav-link" to='/sign_in'>SIGN IN</Link>)
                    }




                    <CardIcon />
                </div>
                { isCartOpen && <CardDrpdown />}
                {/* <CardDrpdown /> */}
            </div>

            <Outlet />
        </Fragment>
    )

}


export default Navigation
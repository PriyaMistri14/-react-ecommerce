import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.css'


// import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";


import { signOutUser } from "../../utils/firebase/firebase.util";


import CardIcon from "../../components/card-icon/card-icon.component";

import CardDrpdown from "../../components/card-dropdown/card-dropdown.component";


// import { CartContext } from "../../contexts/cart.context";

import { useSelector } from "react-redux";


import { selectCurrentUser } from "../../store/user/user.selector";


import { selectIsCartOpen } from "../../store/cart/cart.selector";

//.. for saga
import { useDispatch } from "react-redux";

import { signOutStart } from "../../store/user/user.action";



// import { Link } from "react-router-dom";

const Navigation = () => {

    const dispatch = useDispatch()

    // const currentUser = useSelector((state)=> state.user.currentUser) //  this is before centralize

    const currentUser = useSelector(selectCurrentUser)

    // const { currentUser, setCurrentUser } = useContext(UserContext)  // this line is comment to use redux, to use context just uncomment it
    console.log("current user:", currentUser);

    // const {isCartOpen, setIsCartOpen} = useContext(CartContext)  //  this line is comment to use redux, to use context just uncomment it
 
const isCartOpen = useSelector(selectIsCartOpen)

// this whole fun is commented to use saga in bellow fun
    // const onSignOutHAndler = async () => {
    //     const res = await signOutUser()
    //     console.log("after sign out", res);
    //     // setCurrentUser(null)       //centralize this using onAuthchange if remove onAuthchange then uncomment this line 
    // }

const onSignOutHAndler = ()=> dispatch(signOutStart())



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
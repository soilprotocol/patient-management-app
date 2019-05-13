import React from 'react'; 
import { Link, NavLink } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 


const Navbar = props => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Health-App</Link>
                <ul className="right">
                    <Button onClick={props.onClick}>{props.webId ? "Logout" : "Login"}</Button>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar; 
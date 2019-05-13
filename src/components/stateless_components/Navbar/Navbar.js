import React from 'react'; 
import { Link, NavLink } from 'react-router-dom'; 


const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Health-App</Link>
            </div>
        </nav>
    )
}


export default Navbar; 
import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => (<nav className="navbar navbar-expand-sm navbar-light fixed-top">

    <div className="collapse navbar-collapse  font-weight-bold" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <NavLink className="nav-link text-danger" to="/home">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-danger" to="/contact">Contacts</NavLink>
            </li>
          
            
        </ul>
    </div>
</nav>)

export default Nav;
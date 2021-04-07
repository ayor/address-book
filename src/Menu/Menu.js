import React from 'react';
import MenuClasses from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = props => (<React.Fragment>
    <div className={MenuClasses.Menu}>
        <h1 className="h1 text-center border-bottom font-weight-bold text-uppercase my-2">con<span className="font-italic text-danger">techts</span></h1>
        <ul className="list-unstyled font-weight-bold ">
            <li className="list-item p-2 my-4">
                <NavLink to='/' className="text-light" activeClassName=""> Contact List </NavLink>
            </li>
            <li className="list-item p-2 mb-4">
                <NavLink to='/' className="text-light" activeClassName=""> Add New Contacts </NavLink>
            </li>
            <li className="list-item p-2 mb-4">
                <NavLink to='/' className="text-light" activeClassName=""> Blocked Contacts </NavLink>
            </li>
            <li className="list-item p-2 mb-4">
                <NavLink to='/' className="text-light" activeClassName=""> Deleted Contacts </NavLink>
            </li>
        </ul>

    </div>
</React.Fragment>)

export default Menu;
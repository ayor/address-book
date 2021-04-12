import React from 'react';
import MenuClasses from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = props => {

    return (<React.Fragment>
        <div className={MenuClasses.Menu}>
            <div className="border-bottom text-center mb-3">
                <p className="lead p-2 text-capitalize mb-0">{props.user.username}'<span className="text-lowercase">s</span> contacts</p>
                <small className="text-light ">{props.user.email}</small>
            </div>

            <ul className="list-unstyled font-weight-bold">
                {/* <li className="list-item mb-3 ">
                    <NavLink to='/dashboard' exact className="text-light p-3 d-block" activeClassName={MenuClasses.Active}> Dashboard </NavLink>
                </li> */}
                <li className="list-item mb-3 ">
                    <NavLink to='/contact' exact className="text-light p-3 d-block" activeClassName={MenuClasses.Active}> Contact List </NavLink>
                </li>
                <li className="list-item mb-3 ">
                    <NavLink to='/add-contact' className="text-light p-3 d-block" activeClassName={MenuClasses.Active}> Add New Contacts </NavLink>
                </li>
                <li className="list-item mb-3 ">
                    <NavLink to='/blocked-contacts' className="text-light p-3 d-block" activeClassName={MenuClasses.Active}> Blocked Contacts </NavLink>
                </li>
                <li className="list-item mb-3 ">
                    <NavLink to='/deleted-contacts' className="text-light p-3 d-block" activeClassName={MenuClasses.Active}> Deleted Contacts </NavLink>
                </li>
            </ul>
        </div>
    </React.Fragment>)
}

export default Menu;
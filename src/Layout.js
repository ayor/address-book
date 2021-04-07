import React from 'react';
import Nav from './Navigation/Nav';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import Menu from './Menu/Menu';
import Contacts from './Contact/Contacts';

const Layout = props => {
    return (<Router>
        <div className="container-fluid">
            <div className="row">
                <div className="vh-100 pl-0 col-12 col-sm-12 col-md-3">
                    <Menu />
                </div>
                <div className="col-12 col-sm-12 col-md-9">
                    <Nav />
                    <Contacts />
                </div>
            </div>
        </div>
    </Router>)
}

export default Layout;
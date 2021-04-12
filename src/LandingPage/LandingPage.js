import React from 'react';
import LapaClasses from './LandingPage.module.css';
import LoginPage from "../Auth/LoginPage";
import Nav from '../Navigation/Nav';

const LaPa = props => (<React.Fragment>
    <div className={"row " + LapaClasses.LaPa}>
        <div className="col h-100 d-flex justify-content-between  align-items-center">
            <div className="ml-4">
                <h1 className="display-4 text-light ">Welcome to <span className="font-italics text-danger">Contechts</span></h1>
                <p className="text-light font-italics">Connecting you and your loved ones on an easy to use platform...</p>
            </div>
            <div className="w-50">
                <LoginPage {...props} />
            </div>
        </div>
    </div>


</React.Fragment>);

export default LaPa;
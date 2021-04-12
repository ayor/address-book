import React, { useReducer } from 'react';
import ContactPage from './Contact/ContactPage';
import LaPa from "./LandingPage/LandingPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Nav from './Navigation/Nav';
const init = {
    auth: false,
    user: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            let { auth, user } = { ...action.payload };
            return { ...state, user, auth }
        default:
            return { ...state }
    }
}

const Layout = props => {
    const [state, dispatch] = useReducer(reducer, init);


    return (<Router>
        <div className="container-fluid px-0">
            <Nav/>
            <Switch>
                <Route exact path="/home" render={() => <LaPa loggedIn={(data) => dispatch({ type: "LOGIN", payload: data })} />} />
                <Route path="/contact" render={() => state.auth ? <ContactPage user={state.user} /> : <Redirect to='/home' />} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    </Router>)
}

export default Layout;
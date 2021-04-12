import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { axiosInstance } from "../axios-instance";

const LoginPage = props => {
    const [errorMessage, setErrorMessage] = useState("");


    const signUpHandler = (data) => {

        axiosInstance.post('/auth/signup', {
            ...data
        }).then(res => {
            if (res.status === 201) {
                let red_data = {...res.data.user}
                props.loggedIn({user: red_data, auth: true})
                props.history.push('/contact');
            }
        }).catch(({ response }) => {
            switch (response.status) {
                case 401:
                    setErrorMessage(response.data.message)
                    break;

                default:
                    setErrorMessage("An error occured, please try again later.")
                    break;
            }
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        });
    }

    const submitHandler = (data) => {
        axiosInstance.post('/auth/login', {
            ...data
        }).then(res => {
            if (res.status === 200) {
                let red_data = {...res.data.user}
                props.loggedIn({user:red_data, auth: true})
                
                props.history.push('/contact');
            }
        }).catch(({ response }) => {
            switch (response.status) {
                case 401:
                    setErrorMessage(response.data.message)
                    break;

                default:
                    setErrorMessage("An error occured, please try again later.")
                    break;
            }
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        });
    }

    return (<Router>
        <div className="w-75 ml-auto">
            <Switch>
                <Route path='/home/signup' render={() => <SignUp errorMessage={errorMessage} signUpHandler={signUpHandler} />} />
                <Route path='/home' render={() => <Login errorMessage={errorMessage} submitHandler={submitHandler} />} />
            </Switch>
        </div>
    </Router >)
};

export default withRouter(LoginPage);
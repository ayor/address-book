import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import AuthClass from './Auth.module.css';
import Emoji from '../Emoji';

const Login = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (<React.Fragment>
        <form onSubmit={handleSubmit(props.submitHandler)} className={"p-5 row align-self-center "+ AuthClass.AuthForm}>
            <p className="h1 font-weight-bold mb-3 w-100"> <span className="text-light">Log</span> <span className="text-danger">In</span>  <Emoji label="welcome" symbol="🎊"/></p>
            <p className="text-warning ">{props.errorMessage}</p>
            <div className="input-group my-2">
                <div className="input-group-prepend">
                    <div className="text-muted input-group-text"><Emoji label="mail" symbol="📧"/></div>
                </div>
                <input name="email" type="email" {...register("email",{ required: true })} className="form-control " placeholder="Email" />
            </div>
            {errors.email && <span className="text-light">Enter a valid email</span>}
            <div className="input-group my-2">
                <div className="input-group-prepend">
                    <div className=" text-muted input-group-text"><Emoji label="password" symbol="🔐"/></div>
                </div>

                <input name="password" {...register("password",{
                    required: true,
                    minLength: 6
                })} type="password" className="form-control" placeholder="Password" />
            </div>
            {errors.password && <span className="text-light">Password must have a minimum of 6 characters</span>}
            <button type="submit" className="btn btn-outline-danger  text-center w-100  mx-auto mt-3">{ "Login" }</button>

            <p className="mt-3 text-light text-center">New User?  <NavLink to="/home/signup" className="text-danger font-weight-bold">Sign up here</NavLink></p>
        </form>

    </React.Fragment>)
};

export default Login;
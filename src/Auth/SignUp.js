import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import AuthClass from './Auth.module.css';
import Emoji from '../Emoji';

const SignUp = props => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (<React.Fragment>
        <form onSubmit={handleSubmit(props.signUpHandler)} className={"p-5 row align-self-center "+ AuthClass.AuthForm}>
            <p className="h1 font-weight-bold mb-3 w-100"> <span className="text-light">Sign</span> <span className="text-danger">Up</span> <Emoji label="sign up" symbol="🙌"/></p>
            <p className="text-warning">{props.errorMessage} </p>
            <div className="input-group my-2">
                <div className="input-group-prepend">
                    <div className="text-muted input-group-text"><Emoji label="person" symbol="👤"/></div>
                </div>
                <input name="username" type="text" {...register("username",{ required: true })} className="form-control " placeholder="username" />
            </div>
            {errors.username && <span className="text-light">Enter a username</span>}

            <div className="input-group my-2">
                <div className="input-group-prepend">
                <div className="text-muted input-group-text"><Emoji label="mail" symbol="📧"/></div>
                </div>
                <input name="email" type="email" {...register("email",{ required: true })} className="form-control " placeholder="Email" />
            </div>
            {errors.email && <span className="text-light">Enter a valid email</span>}

            <div className="input-group my-2">
                <div className="input-group-prepend">
                <div className=" text-muted input-group-text"> <Emoji label="password" symbol="🔐"/></div>
                </div>


                <input name="password" type="password" {...register("password",{
                    required: true,
                    minLength: 6
                })} className="form-control" placeholder="Password" />
            </div>
            {errors.password && <span className="text-light">Enter a valid password with minimum length of 6 characters</span>}

            <button type="submit" className="btn btn-dark text-center w-100 mx-auto mt-3" >{ "Create Account" }</button>

            <p className="mt-3 text-light text-center">Already have an account? <NavLink to="/home" className="text-danger font-weight-bold" >Log in here</NavLink></p>
        </form>
    </React.Fragment>)
};

export default SignUp;
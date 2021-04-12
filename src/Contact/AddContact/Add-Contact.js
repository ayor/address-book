import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../axios-instance';
import AddContactClass from './Add-Contact.module.css';

const AddContact = (props) => {
    const { formState: { errors }, register, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState();

    const addContact = async (data) => {
        try {
            const res = await axiosInstance.post('/contact/setup', {
                ...data,
                user_id: props.user.id
            });

            if (res.status === 201) {
                props.updateContacts(res.data.contact);
                setErrorMessage("contact added succesfully");

            };


        } catch (error) {
            throw error
        }
    }
    return (<React.Fragment>
        <form onSubmit={handleSubmit(addContact)} className={"p-5 my-3 w-50 mx-auto rounded row align-self-center " + AddContactClass.Form}>
            <p className="h1 font-weight-bold mb-3 text-center w-100"> <span className="text-light">Add</span> <span className="text-light">Contact</span> </p>
            <p className="text-warning">{errorMessage}</p>
            <div className="input-group my-2">
                <div className="input-group-prepend">
                    <i className="fa fa-user pt-2 text-muted input-group-text"></i>
                </div>
                <input name="username" type="text" {...register("username", { required: true })} className="form-control " placeholder="username" />
            </div>
            {errors.username && <span className="text-light">Enter a username</span>}
            <div className="input-group my-2">
                <div className="input-group-prepend">
                    <div className="text-muted input-group-text">@</div>                        </div>
                <input name="email" type="email" {...register("email", { required: true })} className="form-control " placeholder="email" />
            </div>
            {errors.email && <span className="text-light">Enter a valid email</span>}

            <div className="input-group my-2">
                <div className="input-group-prepend">
                    <i className="fa fa-phone pt-2 text-muted input-group-text"></i>
                </div>
                <input name="phone" type="phone" {...register("phone", { required: true })} className="form-control " placeholder="phone" />
            </div>
            {errors.phone && <span className="text-light">Enter a phone number</span>}

            <div className="input-group my-2">

                <textarea name="address" rows="5" {...register("address", { required: true })} cols="10" className="form-control " placeholder="House Address"></textarea>
            </div>

            {errors.address && <span className="text-light">Enter a house address</span>}


            <button type="submit" className="btn btn-danger  text-center w-100  mx-auto mt-3" >Add contact</button>
        </form>

    </React.Fragment>)
}

export default AddContact;
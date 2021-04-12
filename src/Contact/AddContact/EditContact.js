import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from "react-router-dom";
import { axiosInstance } from '../../axios-instance';
import AddContactClass from './Add-Contact.module.css';

const EditContact = props => {
    const { formState: { errors }, register, handleSubmit } = useForm();
    const [contactData, setcontactData] = useState({
        username: "",
        phone: "",
        address: "",
        email: ""
    });

    console.log(props.contacts)

    useEffect(() => {

        const id = props.match.params.id;
        const getContact = async () => {
            try {
                const res = await axiosInstance.get('/contact/contactInfo:' + id);
                if (res.status === 200) {
                    setcontactData(res.data.contact);
                    console.log(res.data.contact);
                }

            } catch (error) {
                throw error
            }
        }
        getContact();
    }, [props.match.params.id]);

    const updateContactHandler = async (data) => {
        try {
            
            const selectedContact = props.contactList.find(contact => contact.key === props.match.params.id.split(":")[1]);
            
            const updateData = {
                ...data,
                contactId: props.match.params.id,
                contactRef: selectedContact.contactRef,
                userId: props.userId
            };
            const response = await axiosInstance.post('/contact/update-contact',updateData
                );

            if (response.status === 200) {
                props.editComplete((response.data.contacts));
                props.history.push('/contact')
            }
        } catch (error) {

        }
    }

    const onChangeHandler = (input, event) => {

        event.preventDefault();
        const val = event.target.value;

        setcontactData((prevState) => {
            const newState = { ...prevState };
            newState[input] = val;

            return newState;
        });
    }

    return (<React.Fragment>
        <form onSubmit={handleSubmit(updateContactHandler)} className={"p-5 my-3 w-50 mx-auto rounded row align-self-center " + AddContactClass.Form}>
            <p className="h1 font-weight-bold mb-3 text-center w-100"> <span className="text-light">Edit</span> <span className="text-light">Contact</span> </p>
            <p className="text-warning">{props.errorMessage}</p>
            <div className="input-group my-2">
                <div className="input-group-prepend">
                    <i className="fa fa-user pt-2 text-muted input-group-text"></i>
                </div>
                <input name="username" type="text" {...register("username", { required: true })} className="form-control " onChange={onChangeHandler.bind(this, "username")} value={contactData.username} placeholder="username" />
            </div>
            {errors.username && <span className="text-light">Enter a username</span>}
            <div className="input-group my-2">
                <div className="input-group-prepend">
                    <div className="text-muted input-group-text">@</div>                        </div>
                <input name="email" type="email"
                    {...register("email", { required: true })}
                    value={contactData.email} className="form-control "
                    onChange={onChangeHandler.bind(this, "email")}
                    placeholder="email" />
            </div>
            {errors.email && <span className="text-light">Enter a valid email</span>}

            <div className="input-group my-2">
                <div className="input-group-prepend">
                <div className=" text-muted input-group-text"> +234</div>
                </div>
                <input name="phone" type="tel" {...register("phone", { required: true })} value={contactData.phone} className="form-control " onChange={onChangeHandler.bind(this, "phone")} placeholder="phone" />
            </div>
            {errors.phone && <span className="text-light">Enter a phone number</span>}

            <div className="input-group my-2">

                <textarea name="address" rows="5" {...register("address", { required: true })} cols="10" value={contactData.address} className="form-control " onChange={onChangeHandler.bind(this, "address")} placeholder="House Address"></textarea>
            </div>

            {errors.address && <span className="text-light">Enter a house address</span>}


            <button type="submit" className="btn btn-danger  text-center w-100  mx-auto mt-3" >Update contact</button>
        </form>

    </React.Fragment>)
}

export default withRouter(EditContact);
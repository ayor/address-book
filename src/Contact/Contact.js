import React from 'react';
import { NavLink } from 'react-router-dom';
import imgsrc from '../assets/img/user-image.jpeg';

const Contact = (props) => (
    <React.Fragment>

        <div className="user-details border-bottom p-3 d-flex justify-content-between">
            <div className="user-info d-flex">
                <div className="user-image mr-2">
                    <img src={imgsrc} alt="contact" width="100" className="img-fluid rounded-circle  " />
                </div>
                <div className="user-contact text-muted my-2">
                    <small className="d-block  ">{props.username}</small>
                    <small className="d-block">{props.address}</small>
                    <small className="d-block">{props.email}</small>
                    <small className="d-block">{props.phone}</small>
                </div>
            </div>

            <div className="my-3">
                <button className="btn btn-outline-dark mr-2">
                    <i className=" fa fa-ban "></i>
                </button>
                <NavLink to={`/edit:${props.id}`} className="btn btn-primary mr-2">
                    <i className=" fa fa-edit text-light"></i>
                </NavLink>
                <button className="btn btn-danger" onClick={props.deleteBtnHandler.bind(this, props.id)} type="button" data-toggle="modal" data-target="#deleteModal">
                    <i className=" fa fa-trash text-light"></i>
                </button>
            </div>

        </div>

    </React.Fragment>
);
export default Contact;
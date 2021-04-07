import React from 'react';
import imgsrc from '../assets/img/user-image.jpeg';

const Contact = props => (
    <React.Fragment>

        <div className="user-details border-bottom p-3 d-flex justify-content-between">
            <div className="user-info d-flex">
                <div className="user-image mr-2">
                    <img src={imgsrc} alt="contact" width="100" className="img-fluid rounded-circle  " />
                </div>
                <div className="user-contact text-muted  my-2">
                    <small className="d-block ">username</small>
                    <small className="d-block">address</small>
                    <small className="d-block">email</small>
                    <small className="d-block">Phone</small>

                </div>
            </div>

            <div className="my-3">
                <button className="btn btn-outline-dark mr-2">
                    <i className=" fa fa-ban "></i>
                </button>
                <button className="btn btn-primary mr-2">
                    <i className=" fa fa-edit text-light"></i>
                </button>
                <button className="btn btn-danger">
                    <i className=" fa fa-trash text-light"></i>
                </button>
            </div>

        </div>

    </React.Fragment>
);
export default Contact;
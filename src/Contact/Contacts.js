import React, { useState } from 'react';
import Contact from './Contact';
import { NavLink } from "react-router-dom";
import Emoji from '../Emoji';
const Contacts = props => {
    const [activeContact, setActiveContact] = useState({
        username:""
    });

    const handleContactDeleteBtn = (contactId) => {
       const _activeContact =  props.contacts.find(contact => contact.key === contactId);
        setActiveContact(_activeContact);
    };

    const noContacts = (
        <div className="text-center my-5">
            <h1 className="h2">You currently have no contacts <Emoji label="sad" symbol="😦" /></h1>
            <NavLink to="/add-contact" className="btn btn-danger">Add a Contact</NavLink>
        </div>
    )
    const contacts = (props.contacts ? props.contacts.map(contact => (
        <li className="" key={contact.key}>
            <Contact
                id={contact.key}
                username={contact.username}
                email={contact.email}
                phone={contact.phone}
                address={contact.address}
                deleteBtnHandler={handleContactDeleteBtn}
            />
        </li>))
        : noContacts);

    return (
        <React.Fragment>
            <div className="container">
                <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="deleteModalLabel">Remove Contact</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete <span className="text-danger font-weight-bold text-capitalize"> {activeContact.username} </span> from your contact list <Emoji label="sad face" symbol="🥺" />    </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Give them another chance <Emoji label="rolling eyes" symbol="🙄" />  </button>
                                <button type="button" data-dismiss="modal" onClick={()=>props.deleteContact(activeContact.key,  activeContact.contactRef)} className="btn btn-danger">Yes! <Emoji label="evil" symbol="😈" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled">
                    {contacts}
                </ul>
            </div>
        </React.Fragment >
    )
};
export default Contacts;
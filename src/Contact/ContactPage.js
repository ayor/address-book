import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import Menu from '../Menu/Menu';
import Contacts from './Contacts';
import AddContact from './AddContact/Add-Contact';
import { axiosInstance } from '../axios-instance';
import EditContact from './AddContact/EditContact';

const ContactPage = props => {
    const [contactData, setContactData] = useState(props.user.contacts);
    const [userKey] = useState(props.user.id);
    const [contacts, setContacts] = useState();
    useEffect(() => {
        const fectchData = async () => {
            const contactList = [];
            const res = await axiosInstance.post('/contact/get-contacts', {userId: userKey});
            if (res.status === 200) {
                
                for (let [key, value] of Object.entries(res.data.contacts)) {
                    contactList.push({ contactRef: key, ...value });
                };
            }

            setContacts(contactList);
        };
        fectchData();
    },[contactData, userKey]);

    const updateContacts =  (contacts) => {
        
        setContacts((prevState) => {
            
            const newState = [...prevState, contacts];
            return newState;
        });
    }

    const deleteContactHandler = async (contactId, contactRef) => {
        try {
            const res = await axiosInstance.post('/contact/delete', {
                contactId,
                userKey: contactRef,
                userId: props.user.id
            });

            if (res.status === 200) {
                setContactData(res.data.contacts);
            }
        } catch (error) {
            throw error;
        }

    }
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="vh-100 pl-0 col-12 col-sm-12 col-md-3">
                        <Menu {...props} />
                    </div>
                    <div className="col-12 col-sm-12 pt-5 col-md-9">
                        <Switch>
                            <Route path="/contact" render={() => <Contacts contacts={contacts} deleteContact={deleteContactHandler} />} />
                            <Route path="/edit:id" render={() => <EditContact editComplete={(contacts)=> setContactData(contacts)} contactList={contacts} userId={userKey}/>} />
                            <Route path="/add-contact" render={() => <AddContact updateContacts={updateContacts} {...props} />} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default withRouter(ContactPage);
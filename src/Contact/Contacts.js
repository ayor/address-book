import React from 'react';
import Contact from './Contact';

const Contacts = props => (
    <React.Fragment>
        <div className="container">
            <ul className="list-unstyled">
                <li>
                    <Contact />
                </li>
                <li>
                    <Contact />
                </li>
                <li>
                    <Contact />
                </li>
            </ul>
        </div>
    </React.Fragment>
);
export default Contacts;
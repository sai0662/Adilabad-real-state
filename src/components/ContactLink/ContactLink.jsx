import React from 'react';
import {Link} from 'react-router-dom';
import './ContactLink.css'

function ContactLink() {
    return (
        <div className='property-conatiner'>
            <div className='header-container'>
                <h1>Join our professional and agent to start selling your house</h1>
            </div>
            
            <Link to='/Contact' className='contact-link'>CONTACT</Link>
        </div>
    );
}

export default ContactLink;
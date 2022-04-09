import React from 'react';
import {Dropdown,DropdownButton,Button,Form} from 'react-bootstrap';
import './Propertiesform.css';

function Propertiesform() {

    return (
        <div className='properties'>
            <h1>Find Your Favorite Property</h1>
            <div className='drop-menu'>
            <Form.Select size="sm" className='form-menu'>
                 <option selected>Select City</option>
                 <option >Adilabad</option>
            </Form.Select>
            <Form.Select size="sm" className='form-menu'>
                 <option selected>Select Property Type</option>
                 <option >Apartments</option>
                 <option >Houses</option>
                 <option >Offices</option>
                 <option >Villas</option>
                 <option >Farm Lands</option> 
                 <option >Open Lands</option>
            </Form.Select>
            <Form.Select size="sm"className='form-menu'>
                 <option selected>Select Any Status</option>
                 <option >Sale</option>
            </Form.Select>
            <Button className='form-button' variant="primary">Search</Button>{' '}
            </div>
           
        </div>
    );
}

export default Propertiesform;
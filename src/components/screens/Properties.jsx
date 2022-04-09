import React from 'react';
import Propertiesform from '../PropertiesForm/Propertiesform';
import Propertiesitem from '../PropertiesItem/Propertiesitem';
import ContactLink from '../ContactLink/ContactLink';
import Footer from '../Footer/Footer';
import Hoc from './Hoc';


function Properties() {
    return (
        <div>
          <Propertiesform /> 
          <Propertiesitem />
          <ContactLink />
          <Footer />
        </div>
    );
}

export default Hoc(Properties);
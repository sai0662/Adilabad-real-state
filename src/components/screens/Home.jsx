import React, { useState } from 'react';
import CaroUsel from '../CaroUsel/CaroUsel';
import Footer from '../Footer/Footer';
import ContactLink from '../ContactLink/ContactLink';
import Propertiesform from '../PropertiesForm/Propertiesform';

    
function Home() {
    return(
        <>
            <Propertiesform />
            <CaroUsel />
            <ContactLink />
            <Footer />
        </>
        
    );
}
export default Home;
import React from "react";
import { Button, Container } from "react-bootstrap";
import data from "../data";
import "./PropertyDetail.css";
import ContactLink from "../ContactLink/ContactLink"
import Footer from "../Footer/Footer";

function PropertyDetail(props) {
  const propertie = data.properties.find((x) => x._id === props.match.params.id);
  return (
    <div className="row propertie-details">
      <div className="propertie">
        <div >
          <div className="propertie-place">
            <li>
              <li>
                <h1>{propertie.place}</h1>
              </li>
              <li>
                <h8>{propertie.address}</h8>
              </li>
            </li>
          </div>
          <div className="propertie-address">
            <li>
              <li>
                <h6>Rent(Houses)</h6>
              </li>
              <li>
                <h1>2 Lack(s)</h1>
              </li>
            </li>
          </div>
        
        </div>
        
      </div>
      <div className="property-detail">
          <div className="propertie-id">
          Property ID:{propertie._id}
          </div>
        <div className="Gallary">
            <img src={propertie.image}/>
        </div>
        <div className="post">
            <h6>Posted By</h6>
            <Button className="button" variant="secondary" size="sm">OWNER</Button>
            <h5>{propertie.contact_person}</h5>
            <div className="contact">
                {propertie.contact_number}<br></br>
                {propertie.mail}
            </div>
        </div>    
      </div>
      <div className="Discription">
          <h5>Area:{propertie.Area}</h5>
          
      </div>
      
      <div className="Features">
          <h5>Area:{propertie.Area}</h5>
          
      </div>
      <div className="Location">
          <h5>Area:{propertie.Area}</h5>
          
      </div>
      
      <div className="Reviews">
          <h5>Area:{propertie.Area}</h5>
          
      </div>
      
      <div className="Leave-a-Reviews">
          <h5>Area:{propertie.Area}</h5>
          
      </div>
      
      <div className="request">
            <h6>Posted By</h6>
            <Button className="button" variant="secondary" size="sm">OWNER</Button>
            <h5>{propertie.contact_person}</h5>
            <div className="contact">
                {propertie.contact_number}<br></br>
                {propertie.mail}
            </div>
        </div>
        <ContactLink />
        <Footer />
    </div>
  );
}

export default PropertyDetail;

import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Propertiesitem.css";
import data from "../data";

function Propertiesitem() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {}, []);

  return (
    <div className="grid-div">
      <div className="container">
        <div className="links">
          <div className="property-type">
            <h10>Property Type</h10>
            <ul>
              <li>
                <Link
                  to="/Houses"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  Form Lands
                </Link>
              </li>
              <li>
                <Link
                  to="/Houses"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  Open Lands
                </Link>
              </li>
              <li>
                <Link
                  to="/Houses"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  Apartments
                </Link>
              </li>
            </ul>
          </div>
          <div className="property-type">
            <h10>Property Status</h10>
            <ul>
              <li>
                <Link
                  to="/Houses"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  Sale
                </Link>
              </li>
              <li>
                <Link
                  to="/Houses"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  Rent
                </Link>
              </li>
            </ul>
          </div>
          <div className="property-type">
            <h10>Property By City</h10>
            <ul>
              <li>
                <Link
                  to="/Houses"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  Adilabad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="properties-data">
          {data.properties.map((propertie) => (
            <li key={propertie._id} className="cards__item">
              <div className="image">
                <Link
                  className="cards__item__link"
                  to={"/propertyDetail/" + propertie._id}
                >
                  <figure
                    className="cards__item__pic-wrap"
                    data-category="Sale"
                  >
                    <img
                      src={propertie.image}
                      alt="Image"
                      className="cards__item__img"
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">
                      Contact-person:{propertie.contact_person}
                      <br></br>
                      Contact-number:{propertie.contact_number}
                      <br></br>
                      Place:{propertie.place}
                      <br></br>
                      Address:{propertie.address}
                      <br></br>
                      Area:{propertie.Area}<br></br>Size:{propertie.Size}
                    </h5>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </div>
        <div className="pagenation">
          <Pagination size="lg">{items}</Pagination>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Propertiesitem;

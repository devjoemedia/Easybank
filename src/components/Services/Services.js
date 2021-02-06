import React from 'react';
import './Services.css';
import online from '../../images/icon-online.svg';
import budgeting from '../../images/icon-budgeting.svg';
import onboarding from '../../images/icon-onboarding.svg';
import openapi from '../../images/icon-api.svg';

function Services() {
  return (
    <div className="services" id="career">
      <div className="container">
        <h1>Why choose Easybank?</h1>
        <p>we leverage open banking to turn bank account into your financial hub. Control your finance like never before.</p>

        <div className="services__content">
          <div className="service">
            <img src={online} alt=""/>
            <h4>Online Banking</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt maxime ducimus, excepturi.</p>
          </div>
          <div className="service">
            <img src={budgeting} alt=""/>
            <h4>Simple Budgeting</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt maxime ducimus, excepturi.</p>
          </div>
          <div className="service">
            <img src={onboarding} alt=""/>
            <h4>fast onboarding</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt maxime ducimus, excepturi.</p>
          </div>
          <div className="service">
            <img src={openapi} alt=""/>
            <h4>Open API</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt maxime ducimus, excepturi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

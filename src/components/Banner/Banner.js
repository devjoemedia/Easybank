import React from "react";
import "./Banner.css";
import mockups from '../../images/image-mockups.png';

function Banner() {
  return (
    <div className="banner">
        <div className="banner__content">
          <h1>Next generation<br/> digital banking</h1>
          <p>Take your financial bank online,Your EasyBank account will be your one-stop-shop for Spending, Saving, Budgeting, Investing and much more. </p>
    
          <button className="btn">Request invite</button>
        </div>
        <div className="banner__image">
          <img src={mockups} alt="mock up"/>
        </div>
    </div>
  );
}

export default Banner;

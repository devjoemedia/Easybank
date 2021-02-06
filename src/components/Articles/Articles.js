import React from "react";
import "./Articles.css";
import imageCurrency from '../../images/image-currency.jpg';
import imageRestaurant from '../../images/image-restaurant.jpg';
import imagePlane from '../../images/image-plane.jpg';
import imageConfetti from '../../images/image-confetti.jpg';

function Articles() {
  return (
    <div className="articles">
      <div className="container">
        <h1>Latest Articles</h1>
        <div className="articles__content">
          <div className="article">
            <img src={imageCurrency} alt="" />
            <div className="article__body">
              <span>By Claire Robinson</span>
              <h4>Receive money in any currency with no fees</h4>
              <p>
                The world is getting smaller and we are becoming more mobile, so why should you be forced to only receive money in single...
              </p>

            </div>
          </div>
          <div className="article">
            <img src={imageRestaurant} alt="" />
            <div className="article__body">
              <span>By Claire Robinson</span>
              <h4>Treat Yourself without worring about money</h4>
              <p>
                Our simple budgeting feature allows you seprate your spending and set realistic limit each mont. That means you...
              </p>

            </div>
          </div>
          <div className="article">
            <img src={imagePlane} alt="" />
            <div className="article__body">

              <span>By Willson Hutton</span>
              <h4>Take your Easybank card wherever you go</h4>
              <p>
                We want your to enjoy your travels, This is why we don't charge you any fees on purchases while you are abroad. We'll even show you...
              </p>
            </div>
          </div>
          <div className="article">
            <img src={imageConfetti} alt="" />
            <div className="article__body">
              <span>By Clair Robinson</span>
              <h4>Our invite-only beta accounts are now live</h4>
              <p>
                After a lot of hard work by the whole team we are excited to lunch our closed beta. it's easy to request an invite through the site...
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;

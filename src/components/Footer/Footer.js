import React from 'react'
import './Footer.css'
import logo from '../../images/logo-dark.svg';
import facebook from '../../images/icon-facebook.svg';
import youtube from '../../images/icon-youtube.svg';
import pintrest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';
import twitter from '../../images/icon-twitter.svg';

function Footer() {
  return (
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__content--left">
              <img src={logo} alt="logo-white"/>
              <ul>
                <li><a href="/"><img src={facebook} alt=""/></a></li>
                <li><a href="/"><img src={youtube} alt=""/></a></li>
                <li><a href="/"><img src={pintrest} alt=""/></a></li> 
                <li><a href="/"><img src={instagram} alt=""/></a></li>
                <li><a href="/"><img src={twitter} alt=""/></a></li>
              </ul>
            </div>
            <div className="footer__content--center">
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer__content--center">
           
              <ul>
                <li>Career</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer__content--right">
              <button className="btn">Request invite</button>
              <p>&copy; Easybank. All Right Reserved</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer

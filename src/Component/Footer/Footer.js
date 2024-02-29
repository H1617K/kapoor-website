import React from 'react';
import '../Footer/Footer.css';
import {GooglePlaystore, Appstore} from '../../assets/Image'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        
        <div className="footer-section-1">
            <div className='footer-section-title'>
          <h3>DOWNLOAD OUR APP</h3>
          <ul>
            <li>
                <img src={GooglePlaystore} alt="Google Play" />
            </li>
            <li>
                <img src={Appstore} alt="Google Play" />
            </li>
          </ul>
          </div>
            <div className="footer-section-2">
          <h2>FOR ANY HELP, YOU MAY CALL US AT</h2>
          <ul>
            <li><a href="tel:1800-266-3333">1800-266-3333</a></li>
            <li>
              (Monday to Saturday: 10 am - 10pm, Sunday: 10 am - 7 pm)
            </li>
          </ul>
        </div>
        </div>


      <div className="footer-content">
        <div className="footer-section">
          <h5>COMPANY</h5>
          <ul>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Terms & conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>INFORMATION</h5>
          <ul>
            <NavLink to="/Returns">Returns</NavLink>
            <NavLink to="/Product">Product</NavLink>
            <NavLink to="/Blogs">Blog/Articles</NavLink>
            <NavLink to="/Newsletter">Subscribe to Newsletter</NavLink>
            <NavLink to="/Affiliate Program">Affiliate Program</NavLink>
            <NavLink to="/FAQ's">FAQ's</NavLink>
            <NavLink to="/Franchise">Franchise</NavLink>
          </ul>
        </div>
        <div className="footer-section">
          <h5>SOCIAL</h5>
          <ul>
            <li>
              <a href="https://www.facebook.com/KAPOORLEHENGASAREE/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kapoorlehengasaree/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://in.pinterest.com/Kapoorlehengasaree/" target="_blank" rel="noopener noreferrer">
                Pinterest
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kapoordesignerexportspvtltd/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>SAFE & SECURE PAYMENT</h5>
          <ul>
            <li>VISA</li>
            <li>RuPay</li>
            <li>PayPal</li>
            <li>Paytm</li>
          </ul>
          <div className="footer-bottom">
        <div className="footer-newsletter">
          <input type="email" placeholder="Type your email here" />
          <button>Subscribe</button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import React from 'react';
import '../Footer/Footer.css';
import Google from "../../assets/Google-Palystore.svg";
import AppStore from '../../assets/AppStore.png'

const Footer = () => {
  return (
    <div className="footer">
        
        <div className="footer-section-1">
            <div className='footer-section-title'>
          <h3>DOWNLOAD OUR APP</h3>
          <ul>
            <li>
                <img src={Google} alt="Google Play" />
            </li>
            <li>
                <img src={AppStore} alt="Google Play" />
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
          <h3>COMPANY</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Terms & conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>INFORMATION</h3>
          <ul>
            <li>Returns</li>
            <li>Product</li>
            <li>Blog/Articles</li>
            <li>Subscribe to Newsletter</li>
            <li>Affiliate Program</li>
            <li>FAQ's</li>
            <li>Franchise</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>SOCIAL</h3>
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
          <h3>SAFE & SECURE PAYMENT</h3>
          <ul>
            <li>VISA</li>
            <li>RuPay</li>
            <li>PayPal</li>
            <li>Paytm</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-newsletter">
          <input type="email" placeholder="Type your email here" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import Image from 'next/image'
import React from 'react'
import { FaApple, FaCcAmex, FaCcMastercard, FaGooglePay, FaInstagram, FaLinkedin, FaPaypal } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-column-content search-section">
            <h1 className="title">BE THE FIRST TO KNOW</h1>
            <p>Sign up for updates from metta muse.</p>
            <div className="footer-signup">
              <input type="text" className="footer-search-bar" placeholder="Enter your email" />
              <button type="submit" className="footer-submit-btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-column-content">
            <h2 className="footer-title">CONTACT US</h2>
            <p className="footer-contact">+44 221 133 5360</p>
            <p className="footer-email">customercare@mettamuse.com</p>
          </div>
          <div className="footer-column-content">
            <h2 className="footer-title">CURRENCY</h2>
            <div className="footer-currency">
              <Image src="" alt="US Flag" width={24} height={24} className="currency-flag" />
              <span className="currency-code">USD</span>
            </div>
            <p className="footer-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>
      <hr className='separater' />
      <div className="footer-links">
        <div className="footer-column-content">
          <h2 className="footer-title">metta muse</h2>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-column-content">
          <h2 className="footer-title">QUICK LINKS</h2>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <div className="footer-column-content">
            <h2 className="footer-title">FOLLOW US</h2>
            <ul className='share-methods'>
              <li><FaInstagram size={24} /></li>
              <li><FaLinkedin size={24} /></li>
            </ul>
          </div>
          <div className="footer-column-content">
            <h2 className="footer-title">metta muse ACCEPTS</h2>
            <ul className="payment-methods">
              <li><FaCcMastercard size={50} /></li>
              <li><FaPaypal size={50} /></li>
              <li><FaCcAmex size={50} /></li>
              <li><FaApple size={50} /></li>
              <li><FaGooglePay size={50} /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container-sml">
      <div className="col-12 text-center">
        <div>
          <a className="nav-link" href="https://twitter.com/codenail">
            Twitter
          </a>
          <a className="nav-link" href="https://www.facebook.com/codenail">
            Facebook
          </a>
          <a className="nav-link" href="mailto:support@codenail.com">
            Contact
          </a>
          <Link to="/pricing" className="nav-link">
            Pricing
          </Link>
          <Link to="/faq" className="nav-link">
            FAQ
          </Link>
          <Link to="/privacy" className="nav-link">
            Privacy
          </Link>
          <a className="nav-link" href="https://www.etsy.com/shop/Codenail">
            Etsy Store
          </a>
        </div>
        <br/>
        <div>
          <span>
            Copyright © 2017 Codenail
          </span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;
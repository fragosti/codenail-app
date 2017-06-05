import React from 'react';
import {
  Link
} from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container-lrg">
      <div className="col-12 spread">
        <div>
          <Link to="/" className="logo">
            Codenail
          </Link>
        </div>
        <div>
          <a className="nav-link" href="#">
            Twitter
          </a>
          <a className="nav-link" href="#">
            Facebook
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default Header;
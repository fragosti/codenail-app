import React from 'react';
import Logo from './Logo';

const Header = () => (
  <header className="header">
    <div className="container-lrg">
      <div className="col-12 spread">
        <div>
          <Logo to="/">
            Codenail
          </Logo>
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
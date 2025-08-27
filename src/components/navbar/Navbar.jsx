import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h1 className="logo-text">ETERNA</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is?</a>
          </p>
          <p>
            <a href="#possibility">Services</a>
          </p>
          <p>
            <a href="#features">What we do?</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="gpt3__navbar-getstarted">
        <button type="button" className="get-started-btn">
          Get Started
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is?</a>
              </p>
              <p>
                <a href="#possibility">Services</a>
              </p>
              <p>
                <a href="#features">What we do</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-getstarted">
              <button type="button" className="get-started-btn">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

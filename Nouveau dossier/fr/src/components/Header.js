// Header.js
import React, { useState, useCallback } from 'react';
import './Header.css';
import { useAccount } from 'wagmi'

import { Account } from './Account'
import { Connect } from './Connect'
const Header = () => {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          <img src="/log.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2" />
        </a>
        <div className="header-content d-flex">
          <div className="title-container">
            <h1 className="navbar-title mx-auto">SafeStack</h1>
          </div>
          <div className="buttons-container d-flex">
          <a className="btn btn-outline-light me-2" href="#about">About</a>
<a className="btn btn-outline-light me-2" href="#team">Our Team</a>
<a className="btn btn-outline-light" href="#dcapp">DCApp</a>
<>
      <h1>wagmi + ERC20 + Vite</h1>

      <Connect />

      {isConnected && (
        <>
          <Account />
          
        </>
      )}
    </>
  
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
  







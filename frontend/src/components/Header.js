// Header.js
import React, { useState, useCallback } from 'react';
import styles from './Header.css';

const Header = () => {
  const [defaultAccount, setDefaultAccount] = useState('null');
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const connectMetaMask = useCallback(async () => {
    try {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
        setDefaultAccount(result[0]);
      });
      setConnButtonText('Wallet Connected');
    } catch (error) {
      console.error(error);
    }
  }, []);

  const disconnect = useCallback(async () => {
    try {
      setDefaultAccount(null);
      setConnButtonText('Connect Wallet');
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <a className={styles.logo} href="#">
          <img src="/logo1.png" alt="Logo" width="90" height="90" className="d-inline-block align-text-top me-2" />
        </a>
        <div className="header-content d-flex">
          <div className="title-container">
            <h1 className="navbar-title mx-auto">SafeStack</h1>
          </div>
          <div className="buttons-container d-flex">
          <a className="btn btn-outline-light me-2" href="#dcapp">DCApp</a>
            <a className="btn btn-outline-light me-2" href="#about">About</a>
            <a className="btn btn-outline-light me-2" href="#team">Our Team</a>
            
            <button className="btn btn-outline-light me-2" onClick={connectMetaMask}>{connButtonText}</button>
            <button className="btn btn-outline-light" onClick={disconnect}>Disconnect</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;





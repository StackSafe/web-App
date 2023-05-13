// Header.js
import React, { useState, useCallback } from 'react';

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
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/logo.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2" />
          SafeStack
        </a>
        <button className="btn btn-outline-light" onClick={connectMetaMask}>{connButtonText}</button>
        <button className="btn btn-outline-light" onClick={disconnect}>disconnect</button>
      </div>
    </nav>
  );
};

export default Header;
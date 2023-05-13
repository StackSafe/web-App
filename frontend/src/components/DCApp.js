// DCAApp.js
import React, {useState , useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DCApp.css';

const DCApp = () => {
  const [defaultAccount, setDefaultAccount ]=useState('null');
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const connectMetaMask = useCallback(async () => {
    try {
      //const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      //const account = accounts[0];
      window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
        setDefaultAccount(result[0]);
});
      //console.log(account);
      setConnButtonText('Wallet Connected');
    } catch (error) {
      console.error(error);
    }
  }, []);
  const disconnect = useCallback(async () => {
   // try {accounts[0]=''
    //setConnButtonText('Connect Wallet') 
    try {
      setDefaultAccount(null);
    setConnButtonText('Connect Wallet')}catch(error){console.error(error)}

  })
  return (
    <div>
      <header>
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
      </header>
      <main className="container mt-5">
        <button className="btn btn-primary">Ajouter des fonds</button>
        <div className="mt-4">
          <h3>Acheter des ETH</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="total-amount" className="form-label">Montant total en dollars</label>
              <input type="number" className="form-control" id="total-amount" placeholder="100" />
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Durée totale d'achat</label>
              <input type="number" className="form-control" id="duration" placeholder="30" />
            </div>
            <div className="mb-3">
              <label htmlFor="frequency" className="form-label">Fréquence</label>
              <input type="number" className="form-control" id="frequency" placeholder="1" />
            </div>
            <button type="submit" className="btn btn-primary">Acheter des ETH</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default DCApp;

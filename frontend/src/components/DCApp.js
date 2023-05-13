// DCAApp.js
import React,{ useState, useEffect } from 'react';
import { ethers } from "ethers";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DCApp.css';


const DCApp = () => {
  
  
  return (
    <div>
      
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

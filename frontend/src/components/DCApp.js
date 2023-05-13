// DCAApp.js
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './DCApp.css';


const DCApp = () => {
  
  
  return (
    <div>
     <main className="container mt-5">
        <button className="btn btn-primary">Add funds</button>
        <div className="mt-4">
          <h3>Buy cryptocurrencies</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="total-amount" className="form-label">Total amount (in ETH)</label>
              <input type="number" className="form-control" id="total-amount" placeholder="100" />
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">investment lenghts (days)</label>
              <input type="number" className="form-control" id="duration" placeholder="30" />
            </div>
            <div className="mb-3">
              <label htmlFor="frequency" className="form-label">frequency</label>
              <input type="number" className="form-control" id="frequency" placeholder="1" />
            </div>
            <button type="submit" className="btn btn-primary">Buy crypto</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default DCApp;

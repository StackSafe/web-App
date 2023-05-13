import React from 'react';
import DCApp from './components/DCApp';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import OurTeam from './pages/Team';
import './App.css';
import './globals.css';

function App() {
  return (
    <div className="App">
      <div className="header-wrap">
        <Header />
      </div>
      <div className="main-content">
      <div className="content-wrap custom-border">
          <section id="about">
            <h2 className="component-title">About</h2>
            <About />
          </section>
          <section id="teamy">
            <h2 className="component-title">Our Team</h2>
            <OurTeam />
          </section>
          <section id="dcapp">
            <h2 className="component-title">Dollar Cost Averaging App</h2>
            <DCApp />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;




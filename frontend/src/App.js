import React from 'react';
import DCApp from './components/DCApp';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import OurTeam from './pages/Team';
import styles from './App.css'; // Importer le fichier CSS
import Roadmap from './components/User'
function App() {
  return (
    <div className="App">
      <div className="header-wrap">
        <Header />
      </div>
      <div className="main-content">
        <div className="content-wrap">
        <section id="dcapp" className={`section-with-border ${styles.bubble}`}>
            
            <DCApp />
          </section>
          <section id="about" className={`section-with-border ${styles.bubble}`}>
           
            <About />
          </section>
          <section id="team" className={`section-with-border ${styles.bubble}`}>
           
            <OurTeam />
          </section>
          <section className={`roadmap-container`}>
            <Roadmap />
          </section>
          
          
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;

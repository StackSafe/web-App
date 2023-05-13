import { useAccount } from 'wagmi'

import { Account } from './components/Account'
import { Connect } from './components/Connect'
import { ERC20 } from './components/ERC20'
import { NetworkSwitcher } from './components/NetworkSwitcher'
import React from 'react';
import DCApp from './components/DCApp';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import OurTeam from './pages/Team';
import './App.css';
import './globals.css';

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1>wagmi + ERC20 + Vite</h1>


      {isConnected && (
        <>
          <Account />
          
        </>
      )}
    </>
  )
}

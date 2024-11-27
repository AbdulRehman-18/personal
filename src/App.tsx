import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import './styles/custom.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-white">
      <Header />
      <About />
      <Values />
      <Contact />
    </div>
  );
}

export default App;
import React from 'react';
import emergencyFood from './assets/emergency-food.png';
import adviceSupport from './assets/advice-support.png';
import Map from './components/map';
import List from './components/list';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <ul>
          <img src={emergencyFood} alt='lambeth larder icon' />
        </ul>
        <ul>
          <li>Home</li>
          <li>Emergency Food</li>
          <li>Advice & support</li>
          <li>Money saving ideas</li>
          <li>Mental health</li>
          <li>Blog</li>
          <li>About us</li>
        </ul>
      </header>
      <div className='hero'>Emergency Food</div>
      
      <img src={adviceSupport} alt='page title Emergeny Food' />
      <main>
        <Map />
        <List />
      </main>

    </div>
  );
}

export default App;

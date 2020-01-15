import React from 'react';
import emergencyFood from './assets/emergency-food.png';
import Map from './components/map/map.jsx';
import List from './components/list/list.jsx';
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
      
      <main>
        <Map />
        <List />
      </main>

    </div>
  );
}

export default App;

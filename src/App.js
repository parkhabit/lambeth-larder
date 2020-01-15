import React from 'react';
import logo from './assets/logo.svg';
import Map from './components/map';
import List from './components/list';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <img src={logo} alt='lambeth larder icon' />
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
      <img src={logo} alt='page title Emergeny Food' />
      <Map />
      <List />
    </div>
  );
}

export default App;

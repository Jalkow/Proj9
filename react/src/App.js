
import {
  Link
  } from 'react-router-dom'
import './App.css';
import React, { Component } from 'react';

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my site</h1>
        </header>
        <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/produits">produits</Link> </li>
              <li> <Link to="/about">About</Link> </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default App;

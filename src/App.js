import React, { Component } from 'react';
import logo from './picture.jpg';
import './App.css';

class App extends Component {
  componentDidMount() {
    document.title = "Prashanth - Portfolio"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hey! This is Prashanth</h1>
        </header>
        <p className="App-intro">
          Welcome to my portfolio.
        </p>
      </div>
    );
  }
}

export default App;

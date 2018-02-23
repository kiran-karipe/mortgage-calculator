import React, { Component } from 'react';
import './App.css';
import MortgageCalculator from './MortgageCalculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Mortgage Calculator</h1>
        <MortgageCalculator />
      </div>
    );
  }
}

export default App;

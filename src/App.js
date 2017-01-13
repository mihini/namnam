import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const now = new Date();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h4 className="date">Current time: {now.toTimeString()}</h4>
        <input></input>
        <button></button>
        <Restaurants />
      </div>
    );
  }
}

class Restaurants extends React.Component {
  render() {

  const restaurants = ['Palmyra', 'Hjälmaren', 'Två små svin', 'Nelles'];

    return(
      <div className="result-box">
      <ul>
{restaurants.map( rest => <li>{rest}</li> )}
      </ul>
      </div>
    );
  }
}

export default App;

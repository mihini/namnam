import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddressInputForm from './components/AddressInputForm';

class App extends Component {
  render() {

    const now = new Date();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h4 className="date">Current time: {now.toTimeString()}</h4>
        <AddressInputForm />
      </div>
    );
  }
}



export default App;

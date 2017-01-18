import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextResult from './components/TextResult';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextResult/>
      </div>
    );
  }
}

export default App;

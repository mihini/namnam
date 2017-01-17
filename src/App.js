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
        <AdressInputForm />
      </div>
    );
  }
}



class AdressInputForm extends React.Component {
  render() {

      return (
          <form className="input-form" onSubmit={this._handleSearch.bind(this)}>
            <label>Namnam hjälper dig att hitta en restaurang i närheten</label>
              <div className="input-area">
                <input placeholder="Skriv din adress tex. Sveavägen 83, Stockholm..." ref={(input) => this._address = input}/>
                <button type="submit">sök</button>
              </div>
            </form>

    );
  }

_handleSearch(event) {
  event.preventDefault();

  let address = this._address;
  
console.log("click Yes! addressen är: " + address);
}

}

export default App;

import React, { Component } from 'react';
import './App.css';
import './css/style.css';


import Header from './components/Header';
import Footer from './components/Footer';
import Progressbar from './components/Progressbar';
//import Searchbar from './components/Searchbar';



class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                    
                    <Progressbar/>
                <Footer/>

            </div>
        );
    }
}

export default App;


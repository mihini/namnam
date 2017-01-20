import React, { Component } from 'react';
import './App.css';
import './css/style.css';



import Header from './components/Header';
import Footer from './components/Footer';
import TextResult from './components/TextResult';
import Progressbar from './components/Progressbar';
import AddressInputForm from './components/AddressInputForm';
import MapResult from './components/MapResult';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <AddressInputForm />
                <Progressbar/>
                <TextResult/>
                <MapResult/>
                <Footer/>

            </div>
        );
    }
}



export default App;

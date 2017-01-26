import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import AddressInputForm from './components/AddressInputForm';
import Progressbar from './components/Progressbar';
import SearchResults from './components/SearchResults';

class App extends Component {
  constructor() {
    super();

    this._getRestaurant = this._getRestaurant.bind(this);
    this._getRandomRestaurant = this._getRandomRestaurant.bind(this);
    // this.getGeoUserAddress = this.getGeoUserAddress.bind(this);

      this.state = {
        dataLoaded: false, // to check if the restaurantObj is loaded.
        showProgressbar: false,
        showResults: false,
        restaurant:{},
      };
  }


  _getRestaurant(location) {
    this.setState({
      showProgressbar: true
    });


    const appComponent = this;
    var lat =location.lat;//data from google api
    var lng = location.lng;
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
      params: {
        key: 'AIzaSyCyYN3NAc4dMKq7PqupmsXkMd__yNYaT5s',
        location: `${lat} ${lng}`,
        radius: 1000,
        type: 'restaurant',

      }
    }).then(function(response){
      // console.log(response);
      // console.log(response.data.results.length);
      if(response.data.results.length > 0){
        appComponent.setState({
          dataLoaded:true,
          restaurant: appComponent._getRandomRestaurant(response)
        });
      }else{
        alert('Det finns inga restauranger i närheten');
      }


    });
  } // när vi har fått tillbaka resultatet så är laddningen klar och då sätter


  _getRandomRestaurant(response){

    let restaurants = response.data.results;
    // console.log(restaurants);

    let restaurantObj = restaurants[Math.floor(Math.random() * restaurants.length)];
    //console.log(restaurantObj);

    this.setState({
      showProgressbar: false,
      showResults: true
      //showResults: this.state.showResults &&  ? true : false;
    });
    return restaurantObj;
  }

  render() {
      return (
          <div className="App">
              <Header/>
              <AddressInputForm getRestaurant={this._getRestaurant}/>
              <Progressbar showProgressbar={this.state.showProgressbar}/>
              {this.state.dataLoaded ? <SearchResults showResults={this.state.showResults} restaurantObj={this.state.restaurant}/> :
              null}

              {/* showResults blir props i själva componenten (progressbar, jag har döpt dom här, skickar med ett värde )*/}

              <Footer/>

          </div>
      );
  }
}



export default App;

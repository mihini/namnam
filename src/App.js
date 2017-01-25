import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import TextResult from './components/TextResult';
import Progressbar from './components/Progressbar';
import AddressInputForm from './components/AddressInputForm';
import MapResult from './components/MapResult';

class App extends Component {
  constructor() {
    super();

    this.state={
      restaurant:{}
    }

    this._getRestaurant = this._getRestaurant.bind(this);
    this._getRandomRestaurant = this._getRandomRestaurant.bind(this);
    // this.getGeoUserAddress = this.getGeoUserAddress.bind(this);
  }

  _getRestaurant(location){
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
      appComponent.setState({restaurant: appComponent._getRandomRestaurant(response)});

      //
      //
      // for (var i=0;i<response.data.results.length;i++){
      //   restaurants.push(response.data.results[i]);
      // }
      // //console.log(response);
      //
      // console.log(restaurant.name);
      // console.log(restaurant.geometry.location.lat);
      // console.log(restaurant.geometry.location.lng);
    });
  }


  _getRandomRestaurant(response){
    // console.log('hej');
    // console.log();
    let restaurants = response.data.results;
    // console.log(restaurants);

    let restaurantObj = restaurants[Math.floor(Math.random() * restaurants.length)];
    // console.log(restaurantObj);
    return restaurantObj;
  }

  render() {
      return (
          <div className="App">
              <Header/>
              <AddressInputForm getRestaurant={this._getRestaurant}/>
              <Progressbar/>
              <TextResult restaurantObj={this.state.restaurant}/>
              <MapResult/>
              <Footer/>

          </div>
      );
  }
}



export default App;

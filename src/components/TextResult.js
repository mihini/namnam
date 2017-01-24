import React from 'react';

class TextResult extends React.Component{
  // constructor(){
  //   super();
  //   this.getRandomRestaurant = this.getRandomRestaurant.bind(this);
  // }

// function should be in searchform?
  _getRandomRestaurant(){
    const restaurants = ["Chopsticks", "Mc donalds", "Något", "jensens", "nybro"];

    const selectedRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    console.log(this);
    return selectedRestaurant;
  }

  render(){
    return(
      <h3>{this._getRandomRestaurant()}</h3>
    )
  }
}

export default TextResult;

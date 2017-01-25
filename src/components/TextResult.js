import React from 'react';

class TextResult extends React.Component{
  constructor(){
    super();
    // this.getRandomRestaurant = this.getRandomRestaurant.bind(this);
  }


  render(){
    return(
      <h3>{this.props.restaurantObj.name}</h3>
    )
  }
}

export default TextResult;

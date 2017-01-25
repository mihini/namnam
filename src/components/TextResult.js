import React from 'react';

class TextResult extends React.Component{

  render(){
    return(
      <h3>{this.props.restaurantObj.name}</h3>
    )
  }
}

export default TextResult;

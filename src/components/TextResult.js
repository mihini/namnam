import React from 'react';

class TextResult extends React.Component{

  render(){
    return(
      <div>
        <h3>{this.props.restaurantObj.name}</h3>
        {/*{console.log(this.props.restaurantObj.name)}*/}
      </div>

    )
  }
}

export default TextResult;

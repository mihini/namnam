import React from 'react';

class TextResult extends React.Component{

  render(){
    return(
      <div>
        {/*console.log(this.props.restaurantObj)*/}
        <h3>{this.props.restaurantObj.name}</h3>

      </div>

    )
  }
}

export default TextResult;

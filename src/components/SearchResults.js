import React from 'react';

import TextResult from './TextResult';
import MapResult from './MapResult';

class SearchResults extends React.Component{


  render(){

    var show = {
      display: 'block'
    }

    var hide = {
      display: 'none'
    }

    var showStyle = this.props.showResults ? show : hide;

    return(

      <div className="results" style={showStyle}>
        <TextResult restaurantObj={this.props.restaurantObj}/>
        <MapResult restaurantObj={this.props.restaurantObj}/>
      </div>
    )
  }
}

export default SearchResults;

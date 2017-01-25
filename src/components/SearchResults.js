import React from 'react';

import TextResult from './TextResult';
import MapResult from './MapResult';

class SearchResults extends React.Component{




  render(){
    return(
      <div className="results">
        <TextResult restaurantObj= {this.props.restaurantObj} />
        <MapResult />
      </div>
    )
  }
}

export default SearchResults;

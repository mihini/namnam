import React from 'react';
import axios from 'axios';

class MapResult extends React.Component{

  render(){
    axios.get('https://maps.googleapis.com/maps/api/js?key= AIzaSyA0i6CK5P6zWmK9fSIQFTUlgk7KZc3Q-mw&callback=initMap')
    .then(function(response){
      console.log(response.data);
      console.log(response.status);
    });

    return(

      <div ref="map">
        <p>Map here</p>
      </div>

    )
  }

}

export default MapResult

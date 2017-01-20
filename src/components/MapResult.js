import React from 'react';
import GoogleMap from 'google-map-react';

class MapResult extends React.Component{
  static defaultProps = {
    center: {lat: 59.334591, lng: 18.063240},
    zoom: 9,
    // greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  render(){
    return(
      <div style={{height: 400}}>
        <GoogleMap
          bootstrapURLKeys={{key: "AIzaSyCyYN3NAc4dMKq7PqupmsXkMd__yNYaT5s"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
    </div>
    )
  }
}

export default MapResult;

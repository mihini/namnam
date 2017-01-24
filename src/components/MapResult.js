import React from 'react';
import GoogleMap from 'google-map-react';
// import GoogleMapMarkers from 'google-map-react';
import Marker from './Marker';

class MapResult extends React.Component{
  static defaultProps = {
    center: {lat: 59.2833906, lng: 17.9094205}, // result from google places api's location should be put here
    zoom: 15,
  };

  render(){
    return(
      <div style={{height: 400}}>
        <GoogleMap
          bootstrapURLKeys={{key: "AIzaSyCyYN3NAc4dMKq7PqupmsXkMd__yNYaT5s"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>

          <Marker lat={this.props.center.lat} lng={this.props.center.lng}/>
        </GoogleMap>


    </div>
    )
  }
}

export default MapResult;

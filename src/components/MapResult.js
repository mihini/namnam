import React from 'react';
import GoogleMap from 'google-map-react';
// import GoogleMapMarkers from 'google-map-react';
import Marker from './Marker';

class MapResult extends React.Component{

  static defaultProps = {
    zoom: 15,
  };
  render(){

    return(
      <div style={{height: 400}}>
        <h1></h1>
        <GoogleMap
          bootstrapURLKeys={{key: "AIzaSyCyYN3NAc4dMKq7PqupmsXkMd__yNYaT5s"}}
          center={{lat: this.props.restaurantObj.geometry.location.lat, lng: this.props.restaurantObj.geometry.location.lng}}
          defaultZoom={this.props.zoom}>
          <Marker lat={this.props.restaurantObj.geometry.location.lat} lng={this.props.restaurantObj.geometry.location.lng}/>
          {/*{console.log(this.props.restaurantObj.geometry.location)}*/}
        </GoogleMap>

    </div>
    )
  }
}

export default MapResult;

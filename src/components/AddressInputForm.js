import React from 'react';
import axios from 'axios';

class AddressInputForm extends React.Component {

  _getGeoUserAddress(event){
    event.preventDefault();

    var location;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        key: 'AIzaSyCyYN3NAc4dMKq7PqupmsXkMd__yNYaT5s',
        address: this.address.value
      }
    }).then(function(response){
      return new Promise((resolve, reject) => {
        const results = response.data.results;
        if (results.length > 0){
          resolve(location = results[0].geometry.location);
        } else{
          reject('Finns ej restauranger i närheten');
        }
      });
    }).then(location=>{
      // console.log(this);
      this.props.getRestaurant(location);
    }).catch(err => {
      alert(err);
      // console.error(err);
    });
  }


  render() {
    return(
        <form className="search-form" onSubmit={(e) => this._getGeoUserAddress(e)}>
            <label>Namnam hjälper dig att hitta en restaurang i närheten</label>
            <input ref={(input) => this.address = input} type="text" required placeholder="Skriv din adress tex. Sveavägen 83, Stockholm..." />
            <button type="submit">Sök</button>
        </form>
    )

  }

}

export default AddressInputForm;

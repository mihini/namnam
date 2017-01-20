import React from 'react';
import axios from 'axios';

class AddressInputForm extends React.Component {
  _getGeo(event){
    event.preventDefault();
    console.log(this.address.value); // addressen som användaren skrivit in.

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        key: 'AIzaSyCyYN3NAc4dMKq7PqupmsXkMd__yNYaT5s',
        address: this.address.value
      }
    }).then(function(response){
      console.log(response);
    });

  }
  render() {
    return(
        <form className="search-form" onSubmit={(e) => this._getGeo(e)}>
            <label>Namnam hjälper dig att hitta en restaurang i närheten</label>
            <input ref={(input) => this.address = input} type="text" required placeholder="Skriv din adress tex. Sveavägen 83, Stockholm..." />
            <button type="submit">Sök</button>
        </form>
    )

    //   return (
    //       <form className="input-form" onSubmit={this._getGeo.bind(this)}>
    //         <label>Namnam hjälper dig att hitta en restaurang i närheten</label>
    //           <div className="input-area">
    //             <input placeholder="Skriv din adress tex. Sveavägen 83, Stockholm..." ref={(input) => this._address = input}/>
    //             <button type="submit">sök</button>
    //           </div>
    //         </form>
    //
    // );
  }

// _handleSearch(event) {

//
//   let address = this._address;
// console.log("click Yes! addressen är: " + address);
// }

// _getGeoData(event) {
//    event.preventDefault();
// console.log("geo börjar här ");
//   let username = "nataszkan";
//
//   axios.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyCyYN3NAc4dMKq7PqupmsXkMd__yNYaT5s&callback=initMap')
//     .then(function(response){
//       console.log(response.data); // ex.: { user: 'Your User'}
//       console.log(response.status); // ex.: 200
//     });
//
// }
//
}

export default AddressInputForm;

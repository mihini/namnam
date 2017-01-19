import React from 'react';
import axios from 'axios';

class AddressInputForm extends React.Component {
  render() {

      return (
          <form className="input-form" onSubmit={this._getGeoData.bind(this)}>
            <label>Namnam hjälper dig att hitta en restaurang i närheten</label>
              <div className="input-area">
                <input placeholder="Skriv din adress tex. Sveavägen 83, Stockholm..." ref={(input) => this._address = input}/>
                <button type="submit">sök</button>
              </div>
            </form>

    );
  }


_getGeoData(event) {
   event.preventDefault();
console.log("geo börjar här ");
  let username = "nataszkan";

  axios.get('https://api.github.com/users/' + username)
    .then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });

}

}

export default AddressInputForm;

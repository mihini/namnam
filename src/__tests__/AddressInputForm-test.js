import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../App';

import AddressInputForm from '../components/AddressInputForm'
import sinon from 'sinon';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


describe('<AddressInputForm />', () => {
  const click = sinon.spy(AddressInputForm.prototype, "_getGeoUserAddress");

  const component = mount(
    <AddressInputForm />
  );

  it('contains the form', () => {
      expect(component.find('input')).toHaveLength(1);
      expect(component.find('button')).toHaveLength(1);
      expect(component.find('label')).toHaveLength(1);
  });

  it('calling function _getGeoUserAddress when clicking search button', () => {
    component.find('button').simulate('submit');
    expect(click.calledOnce).toBe(true);
  });

  var mock = new MockAdapter(axios);

  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  mock.onGet('https://maps.googleapis.com/maps/api/geocode/json').reply(200, {
    params: [
      { address: 'Årstavägen 83' }
    ]
  });

  axios.get('https://maps.googleapis.com/maps/api/geocode/json')
    .then(function(response) {
      console.log(response.data);
    });
    

});




/*

it('Should return data from response', (done) => {
  let mockAdapter = new MockAdapter(axios);

   mockAdapter.onGet('https://maps.googleapis.com/maps/api/geocode/json').reply(200, {
     params: {
       address: ['Årstavägen 83']
     }
   });

   setTimeout(() => {
      expect(response).to.be.equal('Årstavägen 83');
   }, 0)
});
*/




//   // test('get response from api when geoUserAddress function is called', () =>{
//   //   const response = component.find(location);
//   //   expect(response.length).toBeGreaterThan(0);
//   //
//   // });



// it('calls the passed in removeGreeting function when remove button is clicked', () => {
//   component.find('button.remove').simulate('click');
//   expect(mockRemoveGreeting).toBeCalled();
// });

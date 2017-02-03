import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../App';

import AddressInputForm from '../components/AddressInputForm'
import sinon from 'sinon';

test('test', () => {
  expect(true).toBe(true);
})
//
describe('<AddressInputForm />', () => {
  const click = sinon.spy(AddressInputForm.prototype, "_getGeoUserAddress");

  const component = mount(
    <AddressInputForm />
  );

  it('contains the form', () => {
      expect(component.find('input')).toHaveLength(1);
      expect(component.find('button')).toHaveLength(1);
  });

  it('calling function _getGeoUserAddress when clicking search button', () => {
    component.find('button').simulate('submit');
    expect(click.calledOnce).toBe(true);
  });

});

//   // test('get response from api when geoUserAddress function is called', () =>{
//   //   const response = component.find(location);
//   //   expect(response.length).toBeGreaterThan(0);
//   //
//   // });



// it('calls the passed in removeGreeting function when remove button is clicked', () => {
//   component.find('button.remove').simulate('click');
//   expect(mockRemoveGreeting).toBeCalled();
// });

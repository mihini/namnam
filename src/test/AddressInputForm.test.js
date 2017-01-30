import React from 'react';
import {shallow} from 'enzyme';
import AddressInputForm from '../components/AddressInputForm'

it('calls the _getGeoUserAddress function when search button is clicked', () => {
  component.find('button').simulate('click');
  expect(_getGeoUserAddress).toBeCalled();
});

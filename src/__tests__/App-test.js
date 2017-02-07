import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../App';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AddressInputForm from '../components/AddressInputForm';
import Progressbar from '../components/Progressbar';
import SearchResults from '../components/SearchResults';
import sinon from 'sinon';

describe(App, () => {
    // const func = sinon.spy(App.prototype, "_getRandomRestaurant");

    const component = shallow(
        <App />
    );

    it('contains a Header subcomponent', () => {
        expect(component.find(Header)).toHaveLength(1);
    });

    it('contains a Footer subcomponent', () => {
        expect(component.find(Footer)).toHaveLength(1);
    });

    it('contains a AddressInputForm subcomponent', () => {
        expect(component.find(AddressInputForm)).toHaveLength(1);
    });

    it('contains a Progressbar subcomponent', () => {
        expect(component.find(Progressbar)).toHaveLength(1);
    });

    it('_getRandomRestaurant function returns an obj from parameter', () => {
      const fakeResponse = {
        data: {
          results:[
            {name:"num1"}
            // {name:"num2"}
          ]
        }
      }
      const func = component.instance()._getRandomRestaurant(fakeResponse);

      expect(func).toEqual(fakeResponse.data.results[0]);
    })


});

/*
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('https://maps.googleapis.com/maps/api/place/nearbysearch/json').reply(200, {
  params: [
    {  location: `${lat} ${lng}` }
  ]
});

axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json')
  .then(function(response) {
    console.log(response.data);
  }); */

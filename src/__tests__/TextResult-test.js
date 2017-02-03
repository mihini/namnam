import React from 'react';
import {shallow } from 'enzyme';

import TextResult from '../components/TextResult';

describe('TextResult', () => {
  const component = shallow(<TextResult restaurantObj/>);

  it('H3 to be empty in the beginning', ()=>{

    expect(component.find('h3').text()).toBe("");
  });

  it('H3 to have a Restaurant name', ()=> {
    const restaurantObj = {
     name: "Burger King"
    }
    component.setProps({restaurantObj});

    expect(component.find('h3').text()).toBe('Burger King');
  })
});

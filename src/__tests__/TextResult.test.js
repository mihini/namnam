import React from 'react';
import {shallow , mount} from 'enzyme';

import TextResult from '../components/TextResult';




    describe('TextResult', () => {

      it('H3 empty in the beginning', ()=>{
        const component = shallow(<TextResult restaurantObj= {name}/>);
        expect(component.find('h3').text()).toBe("");
      });

      it('H3 to have a Restaurant name', ()=> {
        const name = {
         name: "Burger King"
        }
        const component = shallow(<TextResult restaurantObj={name}/>);

        expect(component.find('h3').text()).toBe('Burger King');
      })
    });

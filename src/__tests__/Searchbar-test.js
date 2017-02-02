import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Searchbar from '../components/Searchbar';


describe(Searchbar, () => {
    const component = shallow(
        <Searchbar />
    );

    it('contains the form', () => {
        expect(component.find('input')).toHaveLength(1);
        expect(component.find('button')).toHaveLength(1);
        expect(component.find('h1')).toHaveLength(1);
    });

});

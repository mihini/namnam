import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Marker from '../components/Marker';


describe(Marker, () => {
    const component = shallow(
        <Marker />
    );

    it('contains the form', () => {
        expect(component.find('div')).toHaveLength(1);
    });

});

import React from 'react';
import { shallow } from 'enzyme';
import Progressbar from '../components/Progressbar';



describe(Progressbar, () => {
    const component = shallow(
        <Progressbar />
    );

    it('contains the form', () => {
        expect(component.find('img')).toHaveLength(2);
    });

    it('contains the form', () => {
        expect(component.find('div')).toHaveLength(4);
    });

    it('contains the form', () => {
        expect(component.find('Circle')).toHaveLength(1);
    });
    
});




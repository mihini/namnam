import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Footer from '../components/Footer';


describe(Footer, () => {
    const component = shallow(
        <Footer />
    );

    it('contains the form', () => {
        expect(component.find('header')).toHaveLength(1);
    });

    it('contains the form', () => {
        expect(component.find('div')).toHaveLength(2);
    });

    it('contains the form', () => {
        expect(component.find('h4')).toHaveLength(1);
    });

    it('contains the form', () => {
        expect(component.find('a')).toHaveLength(3);
    });

});

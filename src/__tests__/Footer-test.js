import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Header from '../components/Header';


describe(Header, () => {
    const component = shallow(
        <Header />
    );

    it('contains the form', () => {
        expect(component.find('div')).toHaveLength(1);
    });

    it('contains the form', () => {
        expect(component.find('header')).toHaveLength(1);
    });

    it('contains the form', () => {
        expect(component.find('h1')).toHaveLength(1);
    });

    it('contains the form', () => {
        expect(component.find('img')).toHaveLength(1);
    });

    it('contains the form', () => {
        expect(component.find('h3')).toHaveLength(1);
    });

});

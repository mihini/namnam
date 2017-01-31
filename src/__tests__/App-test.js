import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';


import Header from '../components/Header';
import Footer from '../components/Footer';
import AddressInputForm from '../components/AddressInputForm';
import Progressbar from '../components/Progressbar';
import SearchResults from '../components/SearchResults';


describe(App, () => {
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


});




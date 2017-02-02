import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import AdressInputForm from '../components/AddressInputForm';


describe(AdressInputForm, () => {
    const component = shallow(
        <AdressInputForm />
    );

    it('contains the form', () => {
        expect(component.find('input')).toHaveLength(1);
        expect(component.find('button')).toHaveLength(1);
        expect(component.find('label')).toHaveLength(1);
    });

});

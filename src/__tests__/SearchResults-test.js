import React from 'react';
import {shallow, mount } from 'enzyme';
import SearchResult from '../components/SearchResults';

import TextResult from '../components/SearchResults';
import MapResult from '../components/MapResult';

describe('SearchResult', () => {
    const component = shallow(<SearchResult/>);

    it('contains a TextResult subcomponent', () => {
        expect(component.find(TextResult)).toHaveLength(0);
    });

    it('contains a MapResult subcomponent', () => {
        expect(component.find(TextResult)).toHaveLength(0);
    });

});

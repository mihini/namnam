import React from 'react';
import {shallow , mount} from 'enzyme';
import GoogleMap from 'google-map-react';

import MapResult from '../components/MapResult';
import Marker from '../components/Marker';

describe('MapResult', () => {
  const geo={
    geometry:{
      location:{
        lat: 34.3,
        lng: 33.3
      }
    }
  }
  const component = mount(<MapResult restaurantObj={geo}/>);

  it('MapResult have a googlemap', () => {
    expect(component.find(GoogleMap)).toHaveLength(1)
  });

  it('MapResult have a marker', () => {
    expect(component.find(Marker)).toHaveLength(1)
  });

  it('Have a restaurantObj prop that is not empty', () => {
    expect(component.prop('restaurantObj')).toEqual(geo);
  });
});

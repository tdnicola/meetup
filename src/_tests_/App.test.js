import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../components/EventList';
import Event from '../components/Event';
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents'

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render a list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1)
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  
});
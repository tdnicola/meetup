import React from 'react';
import { shallow, mount } from 'enzyme';
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

describe('<App /> integration', () => {

  test('get list of events after user selects a city', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value', 1.1, 1.2);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
  })
});
import React from 'react';
import { shallow } from 'enzyme';
import Event from '../components/Event';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
    });

    test('event container exists', () => {
        expect(EventWrapper.find('.events')).toHaveLength(1);
    });

    test('event container exists', () => {
        expect(EventWrapper.find('.eventList')).toHaveLength(1);
    });

    test('check to see if showDetails for events is false', () => {
        expect(EventWrapper.state('showDetails')).toBe(false)
    })
  
    test('check to see if meetup ID is populated', () => {
        const events = EventWrapper.state('events');
        expect(events[0].id).toBe('263222596');
    })

    // test('check to see if meetup date is correct', () => {
    //     expect(EventWrapper.find('.eventDate')).toBe('2019-08-07')        
    // })
    test('Check to see if button exists', () => {
      expect(EventWrapper.find('.eventButton')).toHaveLength(1);  
    })

    test('testing to see if button click changes state', () => {
        EventWrapper.find('.eventButton').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    })


})
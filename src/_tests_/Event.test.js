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
  
    test('render list of events correctly', () => {
        const events = EventWrapper.state('events');
        expect(EventWrapper.find('.events li')).toHaveLength(events.length);
        for (let i=0; i < events.length; i += 1) {
            expect(EventWrapper.find('.events li').at(i).text()).toBe(events[i].name);
        }
    })
    // test('populate name of event', () =>{
        
    // })

})
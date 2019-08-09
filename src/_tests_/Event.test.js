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
    //     expect(EventWrapper.find('.eventDate').text()).toBe('2019-08-07');
    // })

    test('Check to see if button exists', () => {
      expect(EventWrapper.find('.eventButton')).toHaveLength(1);  
    })

    test('testing to see if button click changes state', () => {
        EventWrapper.find('.eventButton').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    })

    test('check to see if meetup date is correct', () => {
        EventWrapper.setState({
            events: [ 
                {
                    created: 1563366230000,
                    duration: 3600000,
                    id: "263222596",
                    name: "1 Million Cups Augusta at theClubhou.se",
                    date_in_series_pattern: false,
                    status: "upcoming",
                    time: 1565179200000,
                    local_date: "2019-08-07",
                    local_time: "08:00",
                    updated: 1563366230000,
                    utc_offset: -14400000,
                    waitlist_count: 0,
                    yes_rsvp_count: 21,

                    venue: {
                        id: 25900005,
                        name: "Georgia Cyber Center Hull Mcknight Building",
                        lat: 33.459999084472656,
                        lon: -81.97000122070312,
                        repinned: false,
                        address_1: "1 11th St",
                        city: "Augusta",
                        country: "us",
                        localized_country_name: "USA",
                        zip: "30901",
                        state: "GA"
                    },
                }
            ]
        });

        expect(EventWrapper.find('.eventDate').text()).toBe('2019-08-07');
    
        
    })

})
import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('events component is generated', () => {
        expect(NumberOfEventsWrapper.find('.events')).toHaveLength(1);
    })

    test('input of requested amount of events is generated', () => {
        expect(NumberOfEventsWrapper.find('.eventsNumberInput')).toHaveLength(1);
    })

    test('render number input correctly', () => {
        const numberQuery = NumberOfEventsWrapper.state('numberQuery');
        expect(NumberOfEventsWrapper.find('.eventsNumberInput').prop('value')).toBe(numberQuery)
    })
});


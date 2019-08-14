import React, { Component } from 'react';
import Event from './Event';
import { mockData } from '../mockData/mockData';

class EventList extends Component {
state = {
  eventsData: mockData
}
  render() {

    return (
      <ul className='EventList'>
        {this.state.eventsData.events.map(event => 
          <li key={event.id}>
            <Event event={event}  />
          </li>
        )}
      </ul>
    );
  }
  
}

export default EventList;
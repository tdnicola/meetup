import React, { Component } from 'react';
import Event from './Event';
import { MockData } from '../MockData/MockData';
class EventList extends Component {
state = {
  events: MockData
}
  render() {

    return (
      <ul className='EventList'>
        {this.state.events.map(event => 
          <li key={event.id}>
            <Event event={event}  />
          </li>
        )}
      </ul>
    );
  }
  
}

export default EventList;
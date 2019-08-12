import React, { Component } from 'react';
import {MockData} from '../MockData/MockData';

class Event extends Component {
  state = {
    showDetails: false,
    event: MockData
  }

  
  handleChange = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }
  
  render() {

    const { event } = this.state

    return (
      <div className='eventList'>
        <div className='events' >
            <div>{event.name}</div>
              <div className='eventDate'>{event.local_date}</div>
              <button className='eventButton' onClick={this.handleChange}>more details</button>

              {this.state.showDetails && (
                <div className='eventDetails'>
                <div className='eventVenue'>{event.venue.name}</div> 
                <div className='eventStatus'>{event.status}</div>    
                </div>            
              )}

            </div>
        </div>
    );
  }
}

export default Event;
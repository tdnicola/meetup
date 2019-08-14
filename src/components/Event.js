import React, { Component } from 'react';
// import {MockData} from '../MockData/MockData';

class Event extends Component {
  state = {
    showDetails: false,
    // event: MockData
  }

  
  handleChange = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }
  
  render() {

    const { event } = this.props

    return (
        <div className='event' >
            <div>{event.name}</div>
              <span className='eventDate'>Date: {event.local_date}</span>
              <button className='eventButton' onClick={this.handleChange}>more details</button>

              {this.state.showDetails && (
                <div className='eventDetails'>
                <div className='eventVenue'>Venue: {event.venue.name}</div> 
                <div className='eventStatus'>Status: {event.status}</div>    
                </div>            
              )}

            </div>
    );
  }
}

export default Event;
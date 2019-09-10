import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false,
    events: [],
  }

  
  handleChange = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }
  
  
  render() {
    const { event } = this.props;
    if (!event) {
      return <div>Loading....</div>
    }
    
    return (
        <div className='event' >
            <div className='eventName'>{event.name}</div>
              <span className='eventDate'>Date: {event.local_date}</span>
              <div className='eventLocationCity'>City: {event.venue && event.venue.city}</div>  
              <div className='eventLocationCity'>State: {event.venue && event.venue.state}</div>  

              <button className='eventButton' onClick={this.handleChange}>more details</button>

              {this.state.showDetails && (
                <div className='eventDetails'>
                <div className='eventVenue'>Venue: {event.venue && event.venue.address_1}</div> 
                <div className='eventStatus'>Status: {event.status}</div>  
                <div className='eventStatus'>Name: {event.name}</div>
                <div className='eventStatus'>Group: {event.group.name}</div> 


                {/* <div className='peopleGoing'>{event.rsvp_limit} people going.</div>   */}

                </div>            
              )}

            </div>
    );
  }
}

export default Event;
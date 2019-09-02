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

    function venueAddress(){
      if (event.venue === undefined) {
        return "You must be a member of this group to see address"}
      else {
        return event.venue.address_1}
    }
    function venueCity(){
      if (event.venue === undefined) {
        return "You must be a member of this group to see this"}
      else {
          return event.venue.city}
    }
    function venueState(){
      if (event.venue === undefined) {
        return "You must be a member of this group to see address"}
      else {
          return event.venue.state}
    }

    const { event }= this.props;

    return (
        <div className='event' >
            <div className='eventName'>{event.name}</div>
              <span className='eventDate'>Date: {event.local_date}</span>
              <div className='eventLocationCity'>City: {event.venue.city}</div>  
              <div className='eventLocationCity'>State: {event.venue.state}</div>  

              <button className='eventButton' onClick={this.handleChange}>more details</button>

              {this.state.showDetails && (
                <div className='eventDetails'>
                <div className='eventVenue'>Venue: {event.venue.address_1}</div> 
                <div className='eventStatus'>Status: {event.status}</div>  
                {/* <div className='peopleGoing'>{event.rsvp_limit} people going.</div>   */}

                </div>            
              )}

            </div>
    );
  }
}

export default Event;
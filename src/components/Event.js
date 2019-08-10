import React, { Component } from 'react';

class Event extends Component {
  state = {

    showDetails: false,
  }

  
  handleChange = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }
  
  
  render() {

    const { event } = this.props

    return (
      <div className='eventList'>
        <div className='events' >
            <div key={event.id}>{event.name}
              <div className='eventDate'>{event.local_date}</div>
              <button className='eventButton' onClick={this.handleChange}>more details</button>
              {this.state && (
                <div className='eventDetails'>
                <div className='eventVenue'>{event.venue.name}</div>
                <div className='eventStatus'>{event.status}</div>    
                </div>            
              )}
            </div>
        </div>
      </div>
    );
  }
}

export default Event;
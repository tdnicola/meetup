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
          {/* {this.state.events.map(event =>  */}
            <div key={event.id}> 
              <div className='eventDate'>{event.local_date}</div>
              <button className='eventButton' onClick={this.handleChange}>more details</button>
            </div>
            
            {/* )} */}
        </div>
      </div>
    );
  }
}

export default Event;
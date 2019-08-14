import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './components/api';


class App extends Component {

  state = {
    events: []
  }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }))
  }

  render () {

    
    return (
      <div className='app'>
        <CitySearch updateEvents={this.updateEvents} />
        <EventList/>
        {/* <Event /> */}
        <NumberOfEvents />
      </div>
    )
  }
}

export default App;

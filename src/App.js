import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './components/api';
import { mockData } from './mockData/mockData'


class App extends Component {

  state = {
    events: []
  }

updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }));
  }

  render () {

    
    return (
      <div className='App'>
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
        {/* <Event /> */}
        <NumberOfEvents />
      </div>
    )
  }
}

export default App;

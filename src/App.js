import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './components/api';

class App extends Component {

  state = {
    events: []
  }

updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }));
  }

//loading events based on location, no lat/lon at first load.
  componentDidMount(){
    this.updateEvents(null, null)
  }

  render () {
    return (
      <div className='App'>
        <h3>Checkout some events for your city!</h3>
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
        <NumberOfEvents />
      </div>
    )
  }
}

export default App;

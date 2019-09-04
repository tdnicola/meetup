import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './components/api';

class App extends Component {

  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
  }
  
  //loading events based on location, no lat/lon at first load.
    componentDidMount(){
      this.updateEvents()
    }

updateEvents = (lat, lon, page) => {
  if (lat && lon) {
    getEvents(lat, lon, this.state.page).then(events => 
      this.setState({ events, lat, lon })
      );
  } else if (page) {
    getEvents(this.state.lat, this.state.lon, page).then(events => 
      this.setState({ events, page })
      );
  } else {
    getEvents(this.state.lat, this.state.lon, this.state.page).then(events => 
       this.setState({ events })
    );
  }
}

  render () {
    return (
      <div className='App'>
        <h3>Checkout some events for your city!</h3>
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
        <NumberOfEvents updateEvents={this.updateEvents} />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import Event from './components/Event';
import NumberOfEvents from './components/NumberOfEvents';


class App extends Component {
  render () {
    return (
      <div className='app'>
        <CitySearch/>
        <EventList/>
        {/* <Event /> */}
        <NumberOfEvents/>
      </div>
    )
  }
}

export default App;

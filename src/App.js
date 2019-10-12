import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './components/api';
import {WarningAlert} from './components/Alert';

class App extends Component {

  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
  }
  
  //loading events based on location, no lat/lon at first load.
    componentDidMount(){
      this.updateEvents();
      this.noEvent();
      // .then(() => {
      //   this.noEvent()
      // })
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

      noEvent = () => {
        if(this.state.events === 0) {
          this.setState({
            infoText: 'Man your city isn\'t fun, move somewhere else.'
          });
        } else {
          this.setState({
              infoText: ''
          })
        }
      }


  render () {
    return (
      <div className='App'>
        <h3>Checkout some events for your city!</h3>
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        {this.state.noEvent && <WarningAlert text={this.state.infoText} /> }
        <EventList events={this.state.events}/>
      </div>
    )
  }
}

export default App;

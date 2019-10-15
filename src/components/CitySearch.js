import React, { Component } from 'react';
import { getSuggestions } from './api';
import { InfoAlert } from './Alert';
 
class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    getSuggestions(value).then(suggestions => {
      this.setState({ suggestions });

      if(value && suggestions.length === 0) {
        this.setState({
          infoText: 'We cannot find that city'
        });
      } else {
        this.setState({
          infoText: '',
        });
      }
    });
  }

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon)
  }
  
  render() {
    return (
        <div className='citySearch'>
          <InfoAlert text={this.state.infoText} />

          <input className='city' input='text' value={this.state.query} onChange={this.handleInputChanged} />

          <ul className='suggestions'>
            {this.state.suggestions.map(item =>
              <li key={item.name_string} onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}>
                {item.name_string}
              </li>
            )}
          </ul>
         
        </div>
    );
  }
}

export default CitySearch;
import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        query: 32, //default event number per page for meetup
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
        this.props.updateEvents(null, null, value);
    }

    render () {
        
        return (
            <div className='events'>
                <span>Display</span>
                <input 
                    className='eventsNumberInput'
                    type='number'
                    onChange={this.handleChange}
                    value={this.state.query}
                    placeholder='32'
                />
                <span>Events</span>
            </div>
        )
    }
}

export default NumberOfEvents
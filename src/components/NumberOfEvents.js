import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        numberQuery: 32, //default event number per page for meetup
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ numberQuery: value });
    }

    render () {
        
        return (
            <div className='events'>
                <span>Display</span>
                <input 
                    className='eventsNumberInput'
                    type='number'
                    onChange={this.handleChange}
                    value={this.state.numberQuery}

                    placeholder='32'
                />
                <span>Events</span>
            </div>
        )
    }
}

export default NumberOfEvents
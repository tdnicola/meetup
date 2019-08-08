import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        numberQuery: 25,
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

                    placeholder='20'
                />
                <span>Events</span>
            </div>
        )
    }
}

export default NumberOfEvents
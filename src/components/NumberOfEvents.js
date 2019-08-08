import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        numberQuery: '',
    }
    render () {
        
        return (
            <div className='events'>
                <span>Display</span>
                <input 
                    className='eventsNumberInput'
                    type='number'
                    value={this.state.numberQuery}
                    placeholder='20'
                />
                <span>Events</span>
            </div>
        )
    }
}

export default NumberOfEvents
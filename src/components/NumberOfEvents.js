import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
        query: 32, //default event number per page for meetup
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
        
        if (this.state.query <= 0) {
            this.setState({
                infoText: 'How are you going to do a search with no listings? Think about that..'
            });
        } else {
            this.setState({
                infoText: ''
            })
            this.props.updateEvents(null, null, value);
            }
        }


    render () {
        
        return (
            <div className='events'>
                <div className='alertText'>
                    <ErrorAlert text={this.state.infoText} />
                </div>
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
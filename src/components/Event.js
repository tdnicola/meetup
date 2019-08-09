import React, { Component } from 'react';

class Event extends Component {
  state = {
    events: [ 
        {
        "created": 1563366230000,
        "duration": 3600000,
        "id": "263222596",
        "name": "1 Million Cups Augusta at theClubhou.se",
        "date_in_series_pattern": false,
        "status": "upcoming",
        "time": 1565179200000,
        "local_date": "2019-08-07",
        "local_time": "08:00",
        "updated": 1563366230000,
        "utc_offset": -14400000,
        "waitlist_count": 0,
        "yes_rsvp_count": 21,
        "venue": {
        "id": 25900005,
        "name": "Georgia Cyber Center Hull Mcknight Building",
        "lat": 33.459999084472656,
        "lon": -81.97000122070312,
        "repinned": false,
        "address_1": "1 11th St",
        "city": "Augusta",
        "country": "us",
        "localized_country_name": "USA",
        "zip": "30901",
        "state": "GA"
        },
        "group": {
        "created": 1341289766000,
        "name": "Hack Augusta",
        "id": 4220332,
        "join_mode": "open",
        "lat": 33.459999084472656,
        "lon": -81.97000122070312,
        "urlname": "HackAugusta",
        "who": "Awesome people",
        "localized_location": "Augusta, GA",
        "state": "GA",
        "country": "us",
        "region": "en_US",
        "timezone": "US/Eastern"
        },
        "link": "https://www.meetup.com/HackAugusta/events/263222596/",
        "description": '<p>theClubhou.se hosts 1 Million Cups to Educate, Connect Local Entrepreneurs!</p> <p>Deep Blue Aquatics [<a href="https://www.deepbluemermaid.com" class="linkified">https://www.deepbluemermaid.com</a>] and Soul(tre) [<a href="https://www.soultrenaturalproducts.com" class="linkified">https://www.soultrenaturalproducts.com</a>] are presenting this month!</p> <p>This free, monthly program developed by the Kauffman Foundation helps build startup communities nationwide. Augusta is one of the newest homes of the national program to engage, educate, and connect local entrepreneurs. 1 Million Cups — based on the notion that entrepreneurs network and discover solutions over a million cups of coffee — is a free monthly gathering that helps to build startup communities on a grassroots level. Entrepreneurs, innovators, funders and other interested community members are invited to attend the first Wednesday of each month from 8 to 9 a.m. at theClubhou.se, located at 1 11th Street (100 Grace Hopper Lane) in downtown Augusta. The program’s model is consistent in each city: One Wednesday a month, two early-stage startups present their companies to an audience of mentors, advisors and other entrepreneurs. Each founder presents for six minutes, followed by a 20-minute question-and-answer session with the audience.</p> <p>1 Million Cups in Augusta is currently accepting any business less than five years old that wants to present to the audience. Each company will be videotaped and have the opportunity to present at other 1 Million Cups across the country.</p> <p>Visit: <a href="http://www.1millioncups.com/" class="linkified">http://www.1millioncups.com/</a> Based on the notion that entrepreneurs discover solutions and network over a million cups of coffee, the Kauffman Foundation developed 1 Million Cups - a free program designed to educate, engage, and connect entrepreneurs with their communities.</p> <p>Check out the 1 Million Cups website to learn more about the overall program: <a href="http://www.1millioncups.com/about" class="linkified">http://www.1millioncups.com/about</a></p> ',
        "how_to_find_us": "At the new Cyber Center, 3rd floor, turn left out of the elevators!",
        "visibility": "public",
        "member_pay_fee": false
        },
    ],
    showDetails: false,
  }

  handleChange = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }


  render() {
    return (
      <div className='eventList'>
        <ul className='events' >
          {this.state.events.map(event => 
            <li key={event.id}>{event.name} 
              <div className='eventDate'>{event.local_date}</div>
              <button className='eventButton' onClick={this.handleChange}>more details</button>
            </li>
            
            )}
        </ul>
      </div>
    );
  }
}

export default Event;
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
        // {
        // "created": 1563973005000,
        // "duration": 5400000,
        // "id": "263418506",
        // "name": "TechNet Beer & Bytes",
        // "date_in_series_pattern": false,
        // "status": "upcoming",
        // "time": 1566423000000,
        // "local_date": "2019-08-21",
        // "local_time": "17:30",
        // "updated": 1564584211000,
        // "utc_offset": -14400000,
        // "waitlist_count": 0,
        // "yes_rsvp_count": 18,
        // "venue": {
        // "id": 25933293,
        // "name": "theClubhou.se @ Georgia Cyber Center",
        // "lat": 33.47985076904297,
        // "lon": -81.9701156616211,
        // "repinned": true,
        // "address_1": "One 11th St.",
        // "address_2": "Suite 3700",
        // "city": "Augusta",
        // "country": "us",
        // "localized_country_name": "USA",
        // "zip": "30901",
        // "state": "ga"
        // },
        // "group": {
        // "created": 1341289766000,
        // "name": "Hack Augusta",
        // "id": 4220332,
        // "join_mode": "open",
        // "lat": 33.459999084472656,
        // "lon": -81.97000122070312,
        // "urlname": "HackAugusta",
        // "who": "Awesome people",
        // "localized_location": "Augusta, GA",
        // "state": "GA",
        // "country": "us",
        // "region": "en_US",
        // "timezone": "US/Eastern"
        // },
        // "link": "https://www.meetup.com/HackAugusta/events/263418506/",
        // "description": "<p>Join theClubhou.se, IntelliGenesis, and Uniti Fiber during AFCEA TechNet Week for networking opportunities, tours, and demonstrations of innovative technology.</p> <p>The IntelliGenesis team will provide an overview of their Cybersecurity services to include Digital Forensics Examination, Drone Forensics and ICS/SCADA Cyber Defense training. Additionally, they will provide a demonstration of tools and programs utilized in their Critical Infrastructure and Control System Cybersecurity Course.</p> <p>We'll be on the rooftop patio of the Georgia Cyber Center's Hull-McKnight building!</p> ",
        // "how_to_find_us": "We will meet on the rooftop! Take the furthest to the left elevator of the Hull McKnight building of the Georgia Cyber Center.",
        // "visibility": "public",
        // "member_pay_fee": false
        // },
        // {
        // "created": 1563539503000,
        // "duration": 3600000,
        // "id": "263285296",
        // "name": "Lunch & Learn with SME CPAs: What is accounting anyway?",
        // "date_in_series_pattern": false,
        // "status": "upcoming",
        // "time": 1570636800000,
        // "local_date": "2019-10-09",
        // "local_time": "12:00",
        // "updated": 1563554697000,
        // "utc_offset": -14400000,
        // "waitlist_count": 0,
        // "yes_rsvp_count": 5,
        // "venue": {
        // "id": 25933293,
        // "name": "theClubhou.se @ Georgia Cyber Center",
        // "lat": 33.47986602783203,
        // "lon": -81.97001647949219,
        // "repinned": true,
        // "address_1": "One 11th St.",
        // "address_2": "Suite 3700",
        // "city": "Augusta",
        // "country": "us",
        // "localized_country_name": "USA",
        // "zip": "30901",
        // "state": "ga"
        // },
        // "group": {
        // "created": 1341289766000,
        // "name": "Hack Augusta",
        // "id": 4220332,
        // "join_mode": "open",
        // "lat": 33.459999084472656,
        // "lon": -81.97000122070312,
        // "urlname": "HackAugusta",
        // "who": "Awesome people",
        // "localized_location": "Augusta, GA",
        // "state": "GA",
        // "country": "us",
        // "region": "en_US",
        // "timezone": "US/Eastern"
        // },
        // "link": "https://www.meetup.com/HackAugusta/events/263285296/",
        // "description": "<p>Every business and every individual needs to have some kind of accounting system in their lives. Otherwise, finances can get away from you, you don’t know what you’ve spent, or whether you can expect a profit or a loss from their business. If you’re smart, staying on top of accounting for your business or for your personal checking account is a necessary activity on a daily basis.</p> <p>As boring as it sounds, accounting by definition is the language of business. Looking at a set of good financials can tell you almost everything about a business across any industry. It is a vital and critical part of running and operating a successful company, especially for those that are growing.</p> <p>Our presenter is Brandon Barton, CPA. Brandon is a CPA with a MACC from Kennesaw State University. After interning and working for a year in Atlanta, he is now back in his hometown of Augusta working as a tax staff accountant for SME CPAs. He has been with SME since December 2017.</p> <p>Lunch is provided!</p> ",
        // "how_to_find_us": "Third floor of the new Cyber Center's Hull McKnight building",
        // "visibility": "public",
        // "member_pay_fee": false
        // },
        // {
        // "local_time": "18:45",
        // "local_date": "2019-08-17",
        // "link": "https://www.meetup.com/I-want-to-do-something/events/hxrpsqyzlbwb/",
        // "visibility": "public_limited",
        // "group": {
        // "created": 1480545468000,
        // "name": "I want to do something",
        // "id": 21324962,
        // "join_mode": "approval",
        // "lat": 34.08000183105469,
        // "lon": -81.19000244140625,
        // "urlname": "I-want-to-do-something",
        // "who": "Doers",
        // "localized_location": "Columbia, SC",
        // "state": "SC",
        // "country": "us",
        // "region": "en_US",
        // "timezone": "US/Eastern"
        // },
        // "waitlist_count": 0,
        // "yes_rsvp_count": 8,
        // "duration": 7200000,
        // "time": 1566081900000,
        // "utc_offset": -14400000,
        // "name": "Let's Bowl People",
        // "id": "hxrpsqyzlbwb"
        // },
        // {
        // "local_time": "18:45",
        // "local_date": "2019-09-21",
        // "link": "https://www.meetup.com/I-want-to-do-something/events/hxrpsqyzmbcc/",
        // "visibility": "public_limited",
        // "group": {
        // "created": 1480545468000,
        // "name": "I want to do something",
        // "id": 21324962,
        // "join_mode": "approval",
        // "lat": 34.08000183105469,
        // "lon": -81.19000244140625,
        // "urlname": "I-want-to-do-something",
        // "who": "Doers",
        // "localized_location": "Columbia, SC",
        // "state": "SC",
        // "country": "us",
        // "region": "en_US",
        // "timezone": "US/Eastern"
        // },
        // "waitlist_count": 0,
        // "yes_rsvp_count": 3,
        // "duration": 7200000,
        // "time": 1569105900000,
        // "utc_offset": -14400000,
        // "name": "Let's Bowl People",
        // "id": "hxrpsqyzmbcc"
        // },
        // {
        // "local_time": "18:45",
        // "local_date": "2019-10-19",
        // "link": "https://www.meetup.com/I-want-to-do-something/events/hxrpsqyznbzb/",
        // "visibility": "public_limited",
        // "group": {
        // "created": 1480545468000,
        // "name": "I want to do something",
        // "id": 21324962,
        // "join_mode": "approval",
        // "lat": 34.08000183105469,
        // "lon": -81.19000244140625,
        // "urlname": "I-want-to-do-something",
        // "who": "Doers",
        // "localized_location": "Columbia, SC",
        // "state": "SC",
        // "country": "us",
        // "region": "en_US",
        // "timezone": "US/Eastern"
        // },
        // "waitlist_count": 0,
        // "yes_rsvp_count": 2,
        // "duration": 7200000,
        // "time": 1571525100000,
        // "utc_offset": -14400000,
        // "name": "Let's Bowl People",
        // "id": "hxrpsqyznbzb"
        // },
        // {
        // "created": 1507308789000,
        // "duration": 10800000,
        // "id": "csksvnyzlblb",
        // "name": "Thursday Night Strategy Board Games",
        // "date_in_series_pattern": false,
        // "status": "upcoming",
        // "time": 1565301600000,
        // "local_date": "2019-08-08",
        // "local_time": "18:00",
        // "updated": 1507308789000,
        // "utc_offset": -14400000,
        // "waitlist_count": 0,
        // "yes_rsvp_count": 6,
        // "venue": {
        // "id": 25496781,
        // "name": "Odell Weeks Activity Center",
        // "lat": 33.527923583984375,
        // "lon": -81.72071075439453,
        // "repinned": false,
        // "address_1": "1700 Whiskey Road",
        // "city": "Aiken",
        // "country": "US",
        // "localized_country_name": "USA"
        // },
        // "group": {
        // "created": 1506023096000,
        // "name": "Aiken Weekly Strategy Board Game Night",
        // "id": 26005894,
        // "join_mode": "open",
        // "lat": 33.560001373291016,
        // "lon": -81.70999908447266,
        // "urlname": "Aiken-Weekly-Strategy-Board-Game-Night",
        // "who": "Members",
        // "localized_location": "Aiken, SC",
        // "state": "SC",
        // "country": "us",
        // "region": "en_US",
        // "timezone": "US/Eastern"
        // },
        // "link": "https://www.meetup.com/Aiken-Weekly-Strategy-Board-Game-Night/events/csksvnyzlblb/",
        // "description": "<p>Come and have fun at Aiken's weekly Strategy Board Game night!  We meet each Thursday 6-9 at Odell Weeks.  Just sign in at the front desk (we gather around 5:50 to start at 6:00).  We are usually in Room 2 but the person at the front desk will confirm.</p> <p>You don't have to bring anything - just yourself!  We supply a large choice of games and you don't have to know how to play - we will teach you.</p> <p>Please do RSVP if you plan to attend or not so we can know when to start. :)</p> <p>Looking forward to seeing you!</p> ",
        // "how_to_find_us": "Odell Weeks Activity Center, on Whiskey Road in Aiken.",
        // "visibility": "public",
        // "member_pay_fee": false
        // },
    ],
    showDetails: false,
  }

  handleChange = () => {
    this.setState({ showDetails: true })
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
            // <button>More info</button>
            )}
        </ul>
      </div>
    );
  }
}

export default Event;
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(45)},25:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),s=(n(25),n(2)),l=n(3),c=n(5),u=n(4),p=n(6),d=(n(26),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showDetails:!1,events:[]},n.handleChange=function(){n.setState({showDetails:!n.state.showDetails})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.event;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"eventName"},e.name),r.a.createElement("span",{className:"eventDate"},"Date: ",e.local_date),r.a.createElement("div",{className:"eventLocation"},"Location:",void 0==e.venue?"You must be a member to see":e.venue.address_1),r.a.createElement("button",{className:"eventButton",onClick:this.handleChange},"more details"),this.state.showDetails&&r.a.createElement("div",{className:"eventDetails"},r.a.createElement("div",{className:"eventVenue"},"Venue: ",e.venue.name),r.a.createElement("div",{className:"eventStatus"},"Status: ",e.status)))}}]),t}(a.Component)),m={city:{id:80201,city:"Denver",lat:39.7,lon:-105.08,state:"CO",country:"us",zip:"80201",member_count:48435},events:[{created:1558282293e3,duration:108e5,id:"261592813",name:"New & Returning Members Night",date_in_series_pattern:!1,status:"upcoming",time:15674688e5,local_date:"2019-09-02",local_time:"18:00",updated:1560897088e3,utc_offset:-216e5,waitlist_count:0,yes_rsvp_count:16,venue:{id:9942932,name:"Galvanize",lat:39.73353576660156,lon:-104.99261474609375,repinned:!0,address_1:"1062 Delaware Street",city:"Denver",country:"us",localized_country_name:"USA",zip:"80204",state:"CO"},group:{created:1354586857e3,name:"Code for Denver",id:6104442,join_mode:"open",lat:39.72999954223633,lon:-104.94999694824219,urlname:"CodeForDenver",who:"Civic Innovators",localized_location:"Denver, CO",state:"CO",country:"us",region:"en_US",timezone:"US/Mountain"},link:"https://www.meetup.com/CodeForDenver/events/261592813/",description:"<p>New &amp; Returning Members Night is where we welcome any new members to Code for Denver and where any returning members can continue working with their team on projects.</p> <p>If you\u2019re a new member, or curious about joining Code for Denver, there will be an onboarding session at this night. If you want to get a head start, follow our self onboarding below.</p> <p>You can learn more about Code for Denver, including our open projects, at www.codefordenver.org.<br/>\u2219<br/>\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2666\u2666\u2666\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219<br/>\u2219<br/>CODE OF CONDUCT<br/>\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500<br/>Code for Denver is a safe place to gather, free from harassment and everyone is welcome who embraces diversity, a culture of learning, and is respectful of others and their opinions.</p> <p>This event follows Code for Denver\u2019s Code of Conduct, please read it before attending.</p> <p>If you have any concerns, please contact [masked]<br/>\u2219<br/>\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2666\u2666\u2666\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219<br/>\u2219<br/>FAQ<br/>\u2500\u2500\u2500<br/>There is a full FAQ posted on our GitHub, but here are some highlights we think are important.</p> <p>Where is Galvanize, and where do I park?<br/>--------------------------------------------------<br/>Galvanize is at 1062 Delaware St. on the corner of W 11th Ave and Delaware Street in the Golden Triangle neighborhood of Denver.</p> <p>There\u2019s ample street parking all around, both 2 hour and metered parking should be free of charge and time limit during our meetings. Galvanize is marked by the red pin, and dark grey box.</p> <p>What do I need to bring to my first meetup?<br/>--------------------------------------------------<br/>We will have you create some accounts both on our site and for the technology we use, so a laptop or a smartphone will be useful.</p> <p>I'm a beginner programmer. Can I still get involved?<br/>--------------------------------------------------<br/>Yes! Many of our members have been beginning programmers who have found the environment helpful to improve their abilities while also working on real world problems and providing value.</p> <p>I'm not a programmer or interested in programming. Can I still get involved?<br/>--------------------------------------------------<br/>Yes! Helping solve challenges in the community takes more than programming expertise. Our brigade volunteers also have backgrounds in marketing, design, sales, facilitation, nonprofits, project management, and more. Additional perspectives and experiences are always valued and welcome.</p> <p>What is Code for Denver current working on?<br/>--------------------------------------------------<br/>We have multiple teams working on many different projects at completely different stages. You can find the list, including general descriptions, status, skills needed, and more at our Current Projects page on the website.</p> <p>Who can I contact for additional questions?<br/>--------------------------------------------------<br/>Get in touch with our organizers via our Meetup site or drop us a line at [masked]<br/>\u2219<br/>\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2666\u2666\u2666\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219<br/>\u2219<br/>USEFUL LINKS<br/>\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500<br/>\u25ba ",how_to_find_us:"There is generally a sign pointing out which room we are in. If you can't find us, ask the Galvanize front desk.",visibility:"public",pro_is_email_shared:!1,member_pay_fee:!1},{created:1512747817e3,duration:108e5,id:"cxnkgryzlbrb",name:"August Develop Happy Hour",date_in_series_pattern:!1,status:"upcoming",time:15659136e5,local_date:"2019-08-15",local_time:"18:00",updated:1565378564e3,utc_offset:-216e5,waitlist_count:0,yes_rsvp_count:100,venue:{id:26226878,name:"Big Trouble",lat:39.76924133300781,lon:-104.977294921875,repinned:!1,address_1:"3501 Wazee St Suite #100",city:"Denver",country:"us",localized_country_name:"USA",zip:"80216",state:"CO"},group:{created:1439225694e3,name:"Develop Happy Hour",id:18819666,join_mode:"open",lat:39.900001525878906,lon:-104.94999694824219,urlname:"Develop-Happy-Hour",who:"Cultivators",localized_location:"Denver, CO",state:"CO",country:"us",region:"en_US",timezone:"US/Mountain"},link:"https://www.meetup.com/Develop-Happy-Hour/events/cxnkgryzlbrb/",description:"<p>August will be a special edition! We'll be merging with the DVLP DNVR 2019 conference Opening Happy Hour to become the ultimate power of happy hours! Don't worry no conference badge is required. Come mingle hear about what people learned at the conference and make connections.</p> <p>Come hang out with fellow members of the growing Denver/Boulder tech scene. Everyone is welcome. Come to learn, make contacts or discuss your latest project. No speaker, no agenda, no code knowledge necessary, just drinks.</p> <p>Monthly Happy Hour. We are always open to suggestions for new venues to host the happy hour. Please feel free to message the us with any ideas.</p> ",how_to_find_us:"We'll be at Big Trouble, the bar on the second floor in the middle of the Zeppelin Station food hall.",visibility:"public",member_pay_fee:!1},{created:156028942e4,duration:36e5,id:"tnvdcryzlbkc",name:"Technology Partners Lunch",rsvp_limit:25,date_in_series_pattern:!1,status:"upcoming",time:15669288e5,local_date:"2019-08-27",local_time:"12:00",rsvp_close_offset:"PT1M",updated:156028942e4,utc_offset:-216e5,waitlist_count:0,yes_rsvp_count:7,venue:{id:26038353,name:"Tap & Burger Belleview Station",lat:39.62522888183594,lon:-104.90689849853516,repinned:!0,address_1:"4910 S Newport St",city:"Denver",country:"us",localized_country_name:"USA",zip:"80237",state:"co"},group:{created:1543356603e3,name:"Technology Partners Business Networking",id:30606504,join_mode:"open",lat:39.650001525878906,lon:-104.9800033569336,urlname:"Technology-Partners-Business-Networking",who:"Members",localized_location:"Englewood, CO",state:"CO",country:"us",region:"en_US",timezone:"US/Mountain"},link:"https://www.meetup.com/Technology-Partners-Business-Networking/events/tnvdcryzlbkc/",description:"<p>Join us for lunch, introductions, and some great conversation with like-minded digital technology businesses.</p> <p>Typical Agenda:<br/>* Come early for extra networking time.<br/>* Start promptly at 12:05 - please arrive early<br/>* Introductions - Who you are and your technical specialty<br/>* Topic of the Day - This could be sharing more about our individual businesses, round table topics, or a presentation by Consortium Members.<br/>* Pass contact information - bring business cards!<br/>* End at 1:00<br/>* Stay longer and network if your schedule allows</p> <p>While we do not charge for this event, we do ask that you please make a purchase out of respect for our gracious hosts at Tap and Grill. Please let us know if you RSVP'd and can't make it so we have a correct count for the restaurant.</p> ",how_to_find_us:"In the private room in the back!",visibility:"public",member_pay_fee:!1},{created:1548175893e3,duration:108e5,id:"lsbxxqyzlbsb",name:"Pitch Lab: How To Tell A Captivating Story Like A Stand-Up Comedian!",date_in_series_pattern:!1,status:"upcoming",time:1565829e6,local_date:"2019-08-14",local_time:"18:30",updated:1563204813e3,utc_offset:-216e5,waitlist_count:0,yes_rsvp_count:31,venue:{id:9942932,name:"Galvanize",lat:39.73353576660156,lon:-104.99261474609375,repinned:!0,address_1:"1062 Delaware Street",city:"Denver",country:"us",localized_country_name:"USA",zip:"80204",state:"CO"},group:{created:1215822969e3,name:"Refresh Denver",id:1220063,join_mode:"open",lat:39.75,lon:-104.98999786376953,urlname:"refreshdenver",who:"Designers & Developers",localized_location:"Denver, CO",state:"CO",country:"us",region:"en_US",timezone:"US/Mountain"},link:"https://www.meetup.com/refreshdenver/events/lsbxxqyzlbsb/",description:"<p>About This Workshop</p> <p>Learn to be a more engaging storyteller using proven techniques from your favorite comedians like John Mulaney, Tig Notaro, and Dave Chappelle.</p> <p>In this workshop, we\u2019ll dive into the essential elements of telling a great story and how to avoid common pitfalls that make most stories fall flat.</p> <p>Takeaways from the Stage</p> <p>Storytelling framework to understand why stories work and how to improve yours<br/>The importance of authenticity and vulnerability to tell better stories<br/>Why conflict is the secret sauce to keeping an audience interested</p> <p>About Your Instructor</p> <p>Jay Mays is a 20-year sales veteran and stand-up comedy producer. From his underdog beginnings in dive bars to being awarded Best Comedy Venue in Miami, Jay has produced live comedy events for some of the biggest names in entertainment including Viacom, TEDx &amp; Live Nation.</p> <p>As Managing Partner at Pitch Lab, Jay combines the seemingly disparate worlds of sales and comedy to help professionals be more confident, engaging speakers.</p> <p>Schedule<br/>6:30PM - Drinks &amp; Camaraderie<br/>7:00PM - Talk</p> ",how_to_find_us:"Follow signs for Refresh Denver once inside Galvanize Golden Triangle",visibility:"public",member_pay_fee:!1},{created:155828235e4,duration:108e5,id:"kgwncryzpbgb",name:"New & Returning Members Night",date_in_series_pattern:!1,status:"upcoming",time:15729156e5,local_date:"2019-11-04",local_time:"18:00",updated:1560896911e3,utc_offset:-252e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:9942932,name:"Galvanize",lat:39.73353576660156,lon:-104.99261474609375,repinned:!0,address_1:"1062 Delaware Street",city:"Denver",country:"us",localized_country_name:"USA",zip:"80204",state:"CO"},group:{created:1354586857e3,name:"Code for Denver",id:6104442,join_mode:"open",lat:39.72999954223633,lon:-104.94999694824219,urlname:"CodeForDenver",who:"Civic Innovators",localized_location:"Denver, CO",state:"CO",country:"us",region:"en_US",timezone:"US/Mountain"},link:"https://www.meetup.com/CodeForDenver/events/kgwncryzpbgb/",description:"<p>New &amp; Returning Members Night is where we welcome any new members to Code for Denver and where any returning members can continue working with their team on projects.</p> <p>If you\u2019re a new member, or curious about joining Code for Denver, there will be an onboarding session at this night. If you want to get a head start, follow our self onboarding below.</p> <p>You can learn more about Code for Denver, including our open projects, at www.codefordenver.org.<br/>\u2219<br/>\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2666\u2666\u2666\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219<br/>\u2219<br/>CODE OF CONDUCT<br/>\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500<br/>Code for Denver is a safe place to gather, free from harassment and everyone is welcome who embraces diversity, a culture of learning, and is respectful of others and their opinions.</p> <p>This event follows Code for Denver\u2019s Code of Conduct, please read it before attending.</p> <p>If you have any concerns, please contact [masked]<br/>\u2219<br/>\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2666\u2666\u2666\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219<br/>\u2219<br/>FAQ<br/>\u2500\u2500\u2500<br/>There is a full FAQ posted on our GitHub, but here are some highlights we think are important.</p> <p>Where is Galvanize, and where do I park?<br/>--------------------------------------------------<br/>Galvanize is at 1062 Delaware St. on the corner of W 11th Ave and Delaware Street in the Golden Triangle neighborhood of Denver.</p> <p>There\u2019s ample street parking all around, both 2 hour and metered parking should be free of charge and time limit during our meetings. Galvanize is marked by the red pin, and dark grey box.</p> <p>What do I need to bring to my first meetup?<br/>--------------------------------------------------<br/>We will have you create some accounts both on our site and for the technology we use, so a laptop or a smartphone will be useful.</p> <p>I'm a beginner programmer. Can I still get involved?<br/>--------------------------------------------------<br/>Yes! Many of our members have been beginning programmers who have found the environment helpful to improve their abilities while also working on real world problems and providing value.</p> <p>I'm not a programmer or interested in programming. Can I still get involved?<br/>--------------------------------------------------<br/>Yes! Helping solve challenges in the community takes more than programming expertise. Our brigade volunteers also have backgrounds in marketing, design, sales, facilitation, nonprofits, project management, and more. Additional perspectives and experiences are always valued and welcome.</p> <p>What is Code for Denver current working on?<br/>--------------------------------------------------<br/>We have multiple teams working on many different projects at completely different stages. You can find the list, including general descriptions, status, skills needed, and more at our Current Projects page on the website.</p> <p>Who can I contact for additional questions?<br/>--------------------------------------------------<br/>Get in touch with our organizers via our Meetup site or drop us a line at [masked]<br/>\u2219<br/>\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2666\u2666\u2666\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219\u2219<br/>\u2219<br/>USEFUL LINKS<br/>\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500<br/>\u25ba ",how_to_find_us:"There is generally a sign pointing out which room we are in. If you can't find us, ask the Galvanize front desk.",visibility:"public",pro_is_email_shared:!1,member_pay_fee:!1}]},h=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"eventList"},this.props.events.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d,{event:e}))}))}}]),t}(a.Component),g=n(7),b=n.n(g),v=n(8),f=n(9),w=n.n(f);function y(){return(y=Object(v.a)(b.a.mark(function e(t){var n,a,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Denver",country:"us",localized_country_name:"USA",state:"CO",name_string:"Denver, Colorado, USA",zip:"80201",lat:39.7,lon:-105.08},{city:"Denver",country:"us",localized_country_name:"USA",state:"NC",name_string:"Denver, North Carolina, USA",zip:"28037",lat:35.51,lon:-81.02},{city:"Denver",country:"us",localized_country_name:"USA",state:"PA",name_string:"Denver, Pennsylvania, USA",zip:"17517",lat:40.24,lon:-76.14}]);case 2:return e.next=4,S();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,w.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(e,t,n){return k.apply(this,arguments)}function k(){return(k=Object(v.a)(b.a.mark(function e(t,n,a){var r,o,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",m.events);case 2:return e.next=4,S();case 4:if(!(r=e.sent)){e.next=13;break}return o="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,t&&n&&(o+="&lat="+t+"&lon="+n),a&&(o+="&page"+a),e.next=11,w.a.get(o);case 11:return i=e.sent,e.abrupt("return",i.data.events);case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(e,t){return D.apply(this,arguments)}function D(){return(D=Object(v.a)(b.a.mark(function e(t,n){var a,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://ueg2lqopz6.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://ueg2lqopz6.execute-api.us-east-2.amazonaws.com/dev/api/refresh/"+n),e.next=3,w.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?C("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=337jbe8sopjh7q62t45t732omi&response_type=code&redirect_uri=https://tdnicola.github.io/meetup",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:C("renew",localStorage.getItem("refresh_token"))}var z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),function(e){return y.apply(this,arguments)}(t).then(function(e){return n.setState({suggestions:e})})},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"citySearch"},r.a.createElement("input",{className:"city",input:"text",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map(function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)})))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:32},n.handleChange=function(e){var t=e.target.value;n.setState({query:t}),n.props.updateEvents(null,null,t)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"events"},r.a.createElement("span",null,"Display"),r.a.createElement("input",{className:"eventsNumberInput",type:"number",onChange:this.handleChange,value:this.state.query,placeholder:"32"}),r.a.createElement("span",null,"Events"))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],page:null},n.updateEvents=function(e,t,a){e&&t?_(e,t,a).then(function(a){return n.setState({events:a,lat:e,lon:t})}):a?_(n.state.lat,n.state.lon).then(function(e){return n.setState({events:e,page:a})}):_(n.state.lat,n.state.lon,n.state.page).then(function(e){n.setState({events:e})})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateEvents()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h3",null,"Checkout some events for your city!"),r.a.createElement(z,{updateEvents:this.updateEvents}),r.a.createElement(h,{events:this.state.events}),r.a.createElement(O,{updateEvents:this.updateEvents}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.b7603748.chunk.js.map
import React from 'react';
import { Link } from 'react-router-dom';
var moment = require('moment-timezone');

function convertUTCToLocalTime(startTimeUTC) {
    return moment.utc(startTimeUTC).local().format('hh:mm z A');
}

function EventsPane({ events }) {
    if (!events) {
        return <p className="group-content-placeholder">You have no upcoming events at this time</p>;
    }
    
    return <ul>
        {events.map((eventObj, idx) => {
            return <li key={idx} >
                <div className="panel-item-show-container">
                    <span>{new Date(eventObj.day.split('-').join(' ')).toDateString()}</span>
                    <Link to={`/groups/${eventObj.groupId}/events/${eventObj.id}`}>
                        <div className="panel-item">
                            <span className="panel-item-time">
                                {convertUTCToLocalTime(eventObj.startTime)}
                            </span>
                            <span className="panel-item-details">
                                <p className="first">{eventObj.name}</p>
                                <p className="second">{eventObj.details}</p>
                            </span>
                        </div>
                    </Link>
                </div>
            </li>
        })}
    </ul>;
}


class WelcomeIndexItems extends React.Component {

    componentDidMount(){
        this.props.requestAllEvents()
    }

    render(){
        let { events } = this.props;

        if (!events) {
            return null;
        }
        return < EventsPane events={events}/>
    }
}





// const WelcomeIndexItems = (props) => {
//     const d = new Date()
//     return (
//         <div className="welcome-item-show-container">
//             <span>{d.toDateString()}</span>
//             <div className="welcome-item">
//                 <span className="welcome-item-time">8:00pm</span>
//                 <span>
//                     <p>OFFBEAT SAN FRANCISCO</p>
//                     <p>Indian Curry, Comedy Show &amp; $2 Beers! (EVERY THURSDAY)</p>
//                     <p>1 going</p>
//                 </span>
//             </div>
//             <div className="welcome-item">
//                 <span className="welcome-item-time">6:00pm</span>
//                 <span>
//                     <p>MINGLE WITH TRAVELERS, STUDENTS, AU PAIRS &amp; LOCALS IN SF</p>
//                     <p>BACKPACKER OLYMPICS PARTY with International Travelers &amp; Locals EVERY FRIDAY</p>
//                     <p>47 International Partiers going</p>
//                 </span>
//             </div>
//             <div className="welcome-item">
//                 <span className="welcome-item-time">1:00pm</span>
//                 <span className="welcome-item-details">
//                     <p>THE SAN FRANCISCO ENGLISH BULLDOG MEETUP GROUP</p>
//                     <p>The San Francisco English Bulldog Monthly Meetup</p>
//                     <p>6 SF Bulldoggers going</p>
//                 </span>
//             </div>
//         </div>
//     )
// }

export default WelcomeIndexItems;
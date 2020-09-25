import React from 'react';
import { Link } from 'react-router-dom';
var moment = require('moment-timezone');
import GoogleApiWrapper from '../google_maps/google_maps_wrapper'

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
        let { events, geoCode } = this.props;

        if (!events) {
            return null;
        }
        return (<div className="item-show-content">
                    <div className="left">
                        <EventsPane events={events} />
                    </div>
                    <div className='right'>
                        <div className='google-maps-container'>
                            <GoogleApiWrapper 
                                indexShow={true}
                                geoCode={geoCode}
                            />
                        </div>
                </div>
            </div>)
    }
}

export default WelcomeIndexItems;
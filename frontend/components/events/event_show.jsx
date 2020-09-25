import React from 'react';
import { Link } from 'react-router-dom';
import EventInfo from './event_info_all';
import GoogleApiWrapper from '../google_maps/google_maps_wrapper'
var moment = require('moment-timezone');

function IsAttendee({ event, currentUserId, joinEvent, leaveEvent }) {
    let isAttendee = <button onClick={
                        () => joinEvent(event.id)}
                        className="event-action-button">Attend Event
                    </button>;
    event.attendees.forEach(attendeeObj => {
        if (attendeeObj.id === currentUserId) {
            isAttendee = 
                <div>
                    <button
                        onClick={() => leaveEvent(event.id)}
                        className="event-action-button">Leave Event
                    </button>
                </div>;
        }
    })
    return isAttendee
}

function convertUTCToLocalTime(startTimeUTC) {
    return moment.utc(startTimeUTC).local().format('hh:mm z A');
}

function EventLocation({ event }){

    if(event.address === "" || !event.address){
        return (
            <div className="event-date-time-card">
                <p>This Event is Remote</p>
                <p>Check Event Details for digital address</p>
            </div>
        );
    }

    let cityShow = event.city ? event.city : "";
    let stateShow = event.state ? `, ${event.state}` : "";

    return (
        <div className="event-date-time-card">
            <p>{new Date(event.day.split('-').join(' ')).toDateString()}</p>
            <p>{convertUTCToLocalTime(event.startTime)}</p>
            <p>{`${event.address}`}</p>
            <p>{`${cityShow}${stateShow}`}</p>
        </div>
    )
}

function GoogleMapsContainer({ event, geoCode, requestGeoCode }){
    if(event.digital){
        return ( 
            <span>
                <p className="digital-event-map-placeholder-text">This event is remote</p>
                <p className="digital-event-map-placeholder"></p>
            </span>
        )
    }

    return (<GoogleApiWrapper event={event} geoCode={geoCode} requestGeoCode={requestGeoCode}/>)
}

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleJoinEvent = this.handleJoinEvent.bind(this)
        this.handleLeaveEvent = this.handleLeaveEvent.bind(this)
    }

    componentDidMount() {
        this.props.requestGroup(this.props.groupId)
        this.props.requestEvent(this.props.groupId, this.props.eventId)
    }

    handleJoinEvent(eventId) {
        this.props.createAttendance(eventId)
    }

    handleLeaveEvent(eventId) {
        this.props.deleteAttendance(eventId)
    }

    handleDelete(groupId, eventId) {
        this.props.deleteEvent(groupId, eventId)
            .then(() => {
                this.props.history.push(`/groups/${groupId}/`)
            })
    };


    render() {

        let { event, currentUserId, eventId, groupId, group, geoCode, requestGeoCode } = this.props;

        if (!event || !group) {
            return null;
        }
        let hostName = event.host.firstName  

        let hostTools = event.host.id === currentUserId ? 
        (<div className="item-show-manage-container">
            <Link className="item-show-manage" 
                to={`/groups/${groupId}/events/${eventId}/edit`}>
                    Edit Group Info
            </Link>
            <br />
            <button className="item-show-manage" 
                onClick={() => this.handleDelete(groupId, eventId)}>
                    Delete This Event
            </button>
        </div>) : null;

        return (
            
            <div className="event-show">
                <div className="event-show-top-line">
                    <div>
                        <div>
                            <span className="event-show-top-line-date">
                                {new Date(event.day.split('-').join(' ')).toDateString()}
                            </span>
                        </div>
                        <p>{event.name}</p>
                        <div>
                            <span className='event-organizer-user-icon'></span>
                            <span className="event-host-details">
                                <p className="show-about-title">Hosted By:</p>
                                <p className="host-name">{hostName}</p>
                            </span>
                        </div>
                    </div>
                    <div>
                        {hostTools}
                    </div>
                </div>
                <div className="item-show-head">
                    <img src={event.photoUrl} alt="template_img" 
                    className="item-profile-picture"></img>
                    <div className="top-line-info">
                        <Link to={`/groups/${groupId}`}>
                            <div className="event-group-card">
                                <img src={group.photoUrl} alt="template_img"></img>
                                <span>{group.title}</span>
                            </div>
                        </Link>
                        <EventLocation event={event} />
                        <IsAttendee
                            event={event}
                            currentUserId={currentUserId}
                            groupId={groupId}
                            leaveEvent={(eventId) => this.handleLeaveEvent(eventId)}
                            joinEvent={(eventId) => this.handleJoinEvent(eventId)}
                        />
                    </div>
                </div>
                <div className="item-show-content">
                    <div className="left">
                        <EventInfo event={event} />
                    </div>
                    <div className='right'>
                        <div className='google-maps-container'>
                            <GoogleMapsContainer event={event} geoCode={geoCode} requestGeoCode={requestGeoCode}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default EventShow;
import React from 'react';
import { Link } from 'react-router-dom';
import EventPanel from './event_panel';
import GoogleApiWrapper from '../google_maps/google_maps_wrapper'

function IsAttendee({ event, currentUserId, joinEvent, leaveEvent }) {
    let isAttendee = <button onClick={
                        () => joinEvent(event.id)}
                        className="session-submit">Attend Event
                    </button>;
    event.attendees.forEach(attendeeObj => {
        if (attendeeObj.id === currentUserId) {
            isAttendee = 
                <div>
                    <button
                        onClick={() => leaveEvent(event.id)}
                        className="session-submit">Leave Event
                    </button>
                </div>;
        }
    })
    return isAttendee
}

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleJoinEvent = this.handleJoinEvent.bind(this)
        this.handleLeaveEvent = this.handleLeaveEvent.bind(this)
    }

    componentDidMount() {
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

        let { event, currentUserId, eventId, groupId } = this.props;

        if (!event) {
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

                            console.log('api_key:', process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
                            // console.log('api_key:', process.env);
                            // console.log('api_key:', "REACT_APP_GOOGLE_MAPS_API_KEY");
        return (
            
            <div className="item-show">
                <Link to={`/groups/${groupId}`} 
                    className="item-show-manage">Return to Group Page
                </Link>
                <div className="item-show-head">
                    <img src={event.photoUrl} alt="template_img" 
                    className="item-profile-picture"></img>
                    <div className="top-line-info">
                        <p className="item-title">{event.name}</p>
                        <p>This event has {event.attendees.length} people attending</p>
                        {/* <p>Organized by: {hostName} </p> */}
                        {hostTools}
                        <div className='right'>
                            <p className="show-about-title">Organizers</p>
                            <div className="show-about-details">
                                <span className='organizer-user-icon'></span>
                                <p>{hostName}</p>
                            </div>
                        </div>
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
                        <EventPanel event={event} />
                    </div>
                    <div className='right'>
                        <div className='google-maps-container'>
                            <GoogleApiWrapper />
                            {/* <p>Future home of Google Maps API</p>
                            <div id="map"></div>
                            {console.log('api_key:', process.env.REACT_APP_GOOGLE_MAPS_API_KEY)} */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventShow;
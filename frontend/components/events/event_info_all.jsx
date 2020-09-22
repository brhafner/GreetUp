import React from 'react';

function AttendeesPane({ attendees }) {
    if (attendees.length === 0) {
        return <p>This Event has no one yet attending</p>;
    }

    return <ul className='attendee-pane-index'>
        {attendees.map((attendeeObj, idx) => {
            return <li key={idx} className="attendee-list-item">
                <span className='attendee-user-icon'></span>
                <span className='attendee-pane-index-item'>{attendeeObj.firstName}</span>
            </li>
        })}
    </ul>;
}


class EventInfo extends React.Component {

    render() {

        let { attendees, photoUrl, details } = this.props.event;

        return (
            <div>
                <div>
                    <p className="event-info-item-title">Details:</p>
                    <p>{details}</p>
                </div>
                <div>
                    <p className="event-info-item-title">Attendees:</p>
                    <AttendeesPane attendees={attendees}  />
                </div>
                    {/* <p className="event-info-item-title">Photos:</p>
                    <div>{<img src={photoUrl} />}</div> */}
            </div>
        );
    }
}

export default EventInfo;
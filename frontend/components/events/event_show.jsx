import React from 'react';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        // this.handleJoinEvent = this.handleJoinEvent.bind(this)
        // this.handleLeaveEvent = this.handleLeaveEvent.bind(this)
    }

    componentDidMount() {
        this.props.requestEvent(this.props.groupId, this.props.eventId)
    }

    // handleJoinGroup(groupId) {
    //     this.props.createMembership(groupId)
    // }

    // handleLeaveGroup(groupId) {
    //     this.props.deleteMembership(groupId)
    // }

    handleDelete(groupId, eventId) {
        this.props.deleteEvent(groupId, eventId)
            .then(() => {
                this.props.history.push('/groups')
            })
    };

    render() {

        let { event, currentUserId, eventId, groupId } = this.props;

        if (!event) {
            return null;
        }
        // let hostName = event.host.firstName  <= need to add association and fix JBUILDER

        let organizerTools = <div className="item-show-manage-container">
            <Link className="item-show-manage" to={`/groups/${groupId}/events/${eventId}/edit`}>Edit Group Info</Link><br />
            <button className="item-show-manage" onClick={() => this.handleDelete(groupId, eventId)}>Delete This Group</button>
        </div>

        return (

            <div className="item-show">
                <Link to='/groups' className="item-show-manage">Return to Group Index Page</Link>
                <div className="item-show-head">
                    <img src={event.photoUrl} alt="template_img" className="item-profile-picture"></img>
                    <div className="top-line-info">
                        <p className="item-title">{event.name}</p>
                        {/* <p>This group has {event.attendees.length} members</p> */}
                        {/* <p>Organized by: {organizerName} </p> */}
                        {/* {group.organizerId === currentUserId ? organizerTools : ""} */}
                        {/* <div className='right'>
                            <p className="show-about-title">Organizers</p>
                            <div className="show-about-details">
                                <span className='organizer-user-icon'></span>
                                <p>{organizerName}</p>
                            </div>
                            <IsGroupMember
                                group={group}
                                currentUserId={currentUserId}
                                leaveGroup={(groupId) => this.handleLeaveGroup(groupId)}
                                joinGroup={(groupId) => this.handleJoinGroup(groupId)}
                            />
                        </div> */}
                    </div>
                </div>
                {/* <div className="item-show-content">
                    <div className="left">
                        <GroupPanel group={group} />
                    </div>
                    <div className='right'>
                        <p className="show-about-title">Organizers</p>
                        <div className="show-about-details">
                            <span className='organizer-user-icon'></span>
                            <p>{organizerName}</p>
                        </div>
                        <IsGroupMember
                            group={group}
                            currentUserId={currentUserId}
                            leaveGroup={(groupId) => this.handleLeaveGroup(groupId)}
                            joinGroup={(groupId) => this.handleJoinGroup(groupId)}
                        />
                    </div>
                </div> */}
            </div>
        )
    }
}

export default GroupShow;
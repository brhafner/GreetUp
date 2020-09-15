import React from 'react';
import { Link } from 'react-router-dom';
import GroupPanel from './group_panel';

function IsGroupMember({ group, currentUserId, joinGroup, leaveGroup }){
    let isMember = <button onClick={
        () => joinGroup(group.id)}
        className="session-submit">Join Group
                </button>;
    group.members.forEach(memberObj => {
        if (memberObj.id === currentUserId) {
            isMember = <div>
                            <button 
                                onClick={() => leaveGroup(group.id)} 
                                className="group_action_button">Leave Group
                            </button>
                            <Link to={`/groups/${group.id}/events/new`} 
                                className="group_action_button">Create A New Event
                            </Link>
                        </div>;
        }
    })
    return isMember
}

class GroupShow extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleJoinGroup = this.handleJoinGroup.bind(this)
        this.handleLeaveGroup = this.handleLeaveGroup.bind(this)
    }

    componentDidMount() {
        this.props.requestGroup(this.props.groupId)
    }

    handleJoinGroup(groupId){
        this.props.createMembership(groupId)
    }

    handleLeaveGroup(groupId){
        this.props.deleteMembership(groupId)
    }

    handleDelete(groupId){
        this.props.deleteGroup(groupId)
            .then(() => {
                this.props.history.push('/groups')
            })
    };

    render() {
    
        let { group, currentUserId } = this.props;
        
        if (!group) {
            return null;
        }
        let organizerName = group.organizer.firstName

        let organizerTools = group.organizerId === currentUserId ? (
            <div className="item-show-manage-container">
                <Link className="item-show-manage" 
                    to={`/groups/${group.id}/edit`}>Edit Group Info
                </Link><br/>
                <button className="item-show-manage" 
                    onClick={() => this.handleDelete(group.id)}>
                    Delete This Group
                </button>
            </div> ) : "";

        let eventCount = !!group.events ? 
            <span>This group has {group.events.length} event(s) happening near you</span> : "";

        return (
            
            <div className="item-show">
                <Link to='/groups' className="item-show-manage">Back to All Groups</Link>
                <div className="item-show-head">
                    <img src={group.photoUrl} alt="template_img" 
                        className="item-profile-picture">
                    </img>
                    <div className="top-line-info">
                        <p className="item-title">{this.props.group.title}</p>
                        <span>This group has {group.members.length} members</span><br />
                        {eventCount}
                        {organizerTools}
                        {/* {group.organizerId === currentUserId ? organizerTools : ""} */}
                    </div>
                </div>
                <div className="item-show-content">
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
                </div>
            </div>
        )
    }
}

export default GroupShow;
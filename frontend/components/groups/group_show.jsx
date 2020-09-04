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
            isMember = <button 
                            onClick={() => leaveGroup(group.id)} 
                            className="session-submit">Leave Group
                        </button>;
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
        
        let { group, currentUserId, groupId } = this.props;
        let organizerName = this.props.group.organizer.firstName

        if (!group) {
            return null;
        }

        let organizerTools = <div className="item-show-manage-container">
            <Link className="item-show-manage" to={`/groups/${group.id}/edit`}>Edit Group Info</Link><br/>
            <button className="item-show-manage" onClick={() => this.handleDelete(group.id)}>Delete This Group</button>
        </div>

        let joinLeaveButton = this.isGroupMember ?
            (<button onClick={() => this.handleJoinGroup(groupId)} className="session-submit">Join Group</button>) :
            (<button onClick={() => this.handleLeaveGroup(groupId)} className="session-submit">Leave Group</button>)

        return (
            
            <div className="item-show">
                <Link to='/groups' className="item-show-manage">Return to Group Index Page</Link>
                <div className="item-show-head">
                    <img src={group.photoUrl} alt="template_img" className="item-profile-picture"></img>
                    <div className="top-line-info">
                        <p className="item-title">{this.props.group.title}</p>
                        <p>This group has {group.members.length} members</p>
                        <p>Organized by: {organizerName} </p>
                        {group.organizerId === currentUserId ? organizerTools : ""}
                        <Link to='/groups' className="session-submit">Return to Group Index Page</Link> */}
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
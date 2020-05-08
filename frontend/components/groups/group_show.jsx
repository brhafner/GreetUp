import React from 'react';
import { Link } from 'react-router-dom';
import GroupPanel from './group_panel';

class GroupShow extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.props.requestGroup(this.props.groupId)
    }

    handleDelete(groupId){
        this.props.deleteGroup(groupId)
            .then(() => {
                this.props.history.push('/groups')
            })
    };


    render() {
        
        let { group, currentUserId } = this.props;
        let organizerName = this.props.group.organizer.firstName

        if (!group) {
            return null;
        }

        let organizerTools = <div className="item-show-manage-container">
            <Link className="item-show-manage" to={`/groups/${group.id}/edit`}>Edit Group Info</Link><br/>
            <button className="item-show-manage" onClick={() => this.handleDelete(group.id)}>Delete This Group</button>
        </div>

        return (
            
            <div className="item-show">
                <Link to='/groups' className="item-show-manage">Return to Group Index Page</Link>
                <div className="item-show-head">
                    <img src={group.photoUrl} alt="template_img" className="item-profile-picture"></img>
                    <div className="top-line-info">
                        <p className="item-title">{this.props.group.title}</p>
                        <p>324 Members</p>
                        <p>Organized by: {organizerName} </p>
                        {group.organizerId === currentUserId ? organizerTools : ""}
                        {/* <button className="session-submit">Join Group</button>
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
                            <p>Organizer_PHOTO</p>
                            <p>{organizerName}</p>
                        </div>
                        <button className="session-submit">Join Group</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupShow;
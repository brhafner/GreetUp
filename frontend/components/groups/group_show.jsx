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

        if (!group) {
            return null;
        }

        let organizerTools = <div className="item-show-manag-container">
            <Link className="item-show-manage" to={`/groups/${group.id}/edit`}>Edit Group Info</Link><br/>
            <button className="item-show-manage" onClick={() => this.handleDelete(group.id)}>Delete This Group</button>
        </div>

        return (
            <div className="item-show">
                <Link to='/groups'>Return to Group Index Page</Link>
                <div className="item-show-head">
                    <img src={group.photoUrl} alt="template_img" className="item-profile-picture"></img>
                    <div className="top-line-info">
                        <p className="item-title">{this.props.group.title}</p>
                        <p>324 Members</p>
                        <p>Organized by: {this.props.group.organizerId}</p>
                        {group.organizerId === currentUserId ? organizerTools : ""}
                    </div>
                </div>
                <GroupPanel group={group}/>
            </div>
        )
    }
}

export default GroupShow;
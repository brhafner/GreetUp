import React from 'react';
import Headers from './group_panel_header';
import { Link } from 'react-router-dom';

function MembersPane({ members }) {
    if (members.length === 0) {
        return <p>This Group has no active members</p>;
    }

    return <ul>
        {members.map((memberObj, idx) => {
            return <li key={idx} >
                        <span className='member-user-icon'></span>
                        <span className='members-pane-index-item'>{memberObj.firstName}</span>
                    </li>
        })}
    </ul>;
}

function EventsPane({ events, group }) {
    if (events.length === 0) {
        return <p>This Group has no upcoming events</p>;
    }

    return <ul>
        {events.map((eventObj, idx) => {
            return <li key={idx} >
                <div className="welcome-item-show-container">
                    <span>{eventObj.day}</span>
                    <Link to={`/groups/${group.id}/events/${eventObj.id}`}>
                    <div className="welcome-item">
                        <span className="welcome-item-time">{eventObj.startTime}</span>
                        <span>
                            <p>{eventObj.name}</p>
                            <p>{eventObj.details}</p>
                            {/* <p>1 going</p> */}
                        </span>
                    </div>
                    </Link>
                </div>
            </li>
        })}
    </ul>;
}

class GroupPanel extends React.Component {
    constructor(props) {
        super(props)

        this.panelTitles = [
            'About',
            'Events',
            'Members',
            'Photos',
        ];
        this.selectTab = this.selectTab.bind(this);
        this.selectTabTitle = this.selectTabTitle.bind(this);

        this.state = { selectedPanel: 0, selectedTabTitle: "About" };
    }

    selectTab(num) {
        this.setState({ selectedPanel: num });
    }

    selectTabTitle (title) {
        this.setState({ selectedTabTitle: title });
    }

    render() {
       
        let { members, photoUrl, about, events } = this.props.group;

        return (
            <div>
                <div>
                    <Headers
                        selectedPanel={this.state.selectedTabTitle}
                        onTabChosen={this.selectTabTitle}
                        panes={this.panelTitles}>
                    </Headers>
                    <div >
                        <article className='show-about-body'>
                            {this.state.selectedTabTitle === "About" &&
                                <div>{about}</div>}
                            {this.state.selectedTabTitle === "Events" &&
                                <EventsPane events={events} group={this.props.group} className='members-pane-index' />}
                            {this.state.selectedTabTitle === "Members" &&
                                <MembersPane members={members} className='members-pane-index'/>}
                            {this.state.selectedTabTitle === "Photos" &&
                                <div>{<img src={photoUrl} />}</div>}
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupPanel;

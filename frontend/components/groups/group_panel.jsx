import React from 'react';
import Headers from './group_panel_header';

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

function EventsPane({ events }) {
    if (events.length === 0) {
        return <p>This Group has no upcoming events</p>;
    }

    return <ul>
        {events.map((eventObj, idx) => {
            return <li key={idx} >
                <div className="welcome-item-show-container">
                    <span>{eventObj.day}</span>
                    <div className="welcome-item">
                        <span className="welcome-item-time">{eventObj.startTime}</span>
                        <span>
                            <p>{eventObj.name}</p>
                            <p>{eventObj.details}</p>
                            {/* <p>1 going</p> */}
                        </span>
                    </div>
                </div>
            </li>
        })}
    </ul>;
}

class GroupPanel extends React.Component {
    constructor(props) {
        super(props)
        /*
        this.panels = [
                { title: 'About', content: this.props.group.about },
                { title: 'Events', content: <WelcomeIndexItems /> },
                { title: 'Members', content: this.props.group.members },
                { title: 'Photos', content: this.props.group.photoUrl }
            ];
        */

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
        /*
        let { members, photoUrl } = this.props.group;
        const pane = this.panels[this.state.selectedPanel];
        debugger
        let membersIndex = (members.length > 0 && pane.content === members) ?
            <ul>
                {members.map((memberObj, idx) => {
                    console.log(memberObj.firstName)
                    return <li key={idx}>{memberObj.firstName}</li>
                })}
            </ul>
         : <p>This Group has no active members</p>;
        let filterContent = (pane.content === photoUrl) ? <img src={pane.content}/>
        : (pane.content === members) ? membersIndex : pane.content;

        */
        let { members, photoUrl, about, events } = this.props.group;
        return (
            <div>
                <div>
                    <Headers
                        //selectedPanel={this.state.selectedPanel}
                        //onTabChosen={this.selectTab}
                        //panes={this.panels}>
                        selectedPanel={this.state.selectedTabTitle}
                        onTabChosen={this.selectTabTitle}
                        panes={this.panelTitles}>
                    </Headers>
                    <div >
                        <article className='show-about-body'>
                            {/*filterContent*/}
                            {/*<PaneContent paneTitle={this.state.selectedTabTitle}/>*/}
                            {this.state.selectedTabTitle === "About" &&
                                <div>{about}</div>}
                            {this.state.selectedTabTitle === "Events" &&
                                <EventsPane events={events} className='members-pane-index' />}
                            {this.state.selectedTabTitle === "Members" &&
                                <MembersPane members={members} className='members-pane-index'/>}
                            {this.state.selectedTabTitle === "Photos" &&
                                <div>{<img src={photoUrl} />}</div>}
                        </article>
                    </div>
                </div>
            </div>
        );
        return <div>
            <ul>
                {members && members.length > 0 && members.map((memberObj, idx) => {
                    console.log(memberObj.firstName)
                    return <li key={idx}>{memberObj.firstName}</li>
                })}
            </ul>
            {JSON.stringify(members, null, 2)}

        </div>;
    }
}

export default GroupPanel;

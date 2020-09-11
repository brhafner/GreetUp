import React from 'react';
import Headers from '../groups/group_panel_header';

function AttendeesPane({ attendees }) {
    if (attendees.length === 0) {
        return <p>This Event has no one yet attending</p>;
    }
    debugger
    return <ul>
        {attendees.map((attendeeObj, idx) => {
            return <li key={idx} >
                <span className='member-user-icon'></span>
                <span className='members-pane-index-item'>{attendeeObj.firstName}</span>
            </li>
        })}
    </ul>;
}


class EventPanel extends React.Component {
    constructor(props) {
        super(props)

        this.panelTitles = [
            'Details',
            'Attendees',
            'Photos',
        ];
        this.selectTab = this.selectTab.bind(this);
        this.selectTabTitle = this.selectTabTitle.bind(this);

        this.state = { selectedPanel: 0, selectedTabTitle: "Details" };
    }

    selectTab(num) {
        this.setState({ selectedPanel: num });
    }

    selectTabTitle(title) {
        this.setState({ selectedTabTitle: title });
    }

    render() {

        let { attendees, photoUrl, details } = this.props.event;

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
                            {this.state.selectedTabTitle === "Details" &&
                                <div>{details}</div>}
                            {this.state.selectedTabTitle === "Members" &&
                                <AttendeesPane attendees={attendees} className='members-pane-index' />}
                            {this.state.selectedTabTitle === "Photos" &&
                                <div>{<img src={photoUrl} />}</div>}
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventPanel;

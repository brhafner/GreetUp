import React from 'react';
import Headers from './group_panel_header';

class GroupPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {selectedPanel: 0};
        this.panels = [
                { title: 'About', content: this.props.group.about },
                { title: 'Events', content: "Future home of events" },
                { title: 'Members', content: "Future home of members" },
                { title: 'Photos', content: this.props.group.photoUrl }
            ];
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(num) {
        this.setState({ selectedPanel: num });
    }

    render() {
        const pane = this.panels[this.state.selectedPanel];

        return (
            <div>
                this is the Group panel
                <div className='tabs'>
                    <Headers
                        selectedPanel={this.state.selectedPanel}
                        onTabChosen={this.selectTab}
                        panes={this.panels}>
                    </Headers>
                    <div className='tab-content'>
                        <article>
                            {pane.content}
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupPanel;
import React from 'react';
import Headers from './group_panel_header';
import WelcomeIndexItems from '../welcome/welcome_index_items'

class GroupPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {selectedPanel: 0};
        this.panels = [
                { title: 'About', content: this.props.group.about },
                { title: 'Events', content: <WelcomeIndexItems /> },
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
        const filterContent = pane.content === this.props.group.photoUrl ? <img src={pane.content}/> : pane.content;

        return (
            <div>
                <div>
                    <Headers
                        selectedPanel={this.state.selectedPanel}
                        onTabChosen={this.selectTab}
                        panes={this.panels}>
                    </Headers>
                    <div >
                        <article className='show-about-body'>
                            {filterContent}
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupPanel;
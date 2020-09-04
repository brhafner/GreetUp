import React from 'react';

class Headers extends React.Component {
    render() {
        const selectedPanelTitle = this.props.selectedPanel;
        const headers = this.props.panes.map((paneTitle, index) => {
            const isActive = paneTitle === selectedPanelTitle;

            return (
                <li className="show-about-body"
                    key={index}
                    className={isActive ? "active" : ""}
                    onClick={() => this.props.onTabChosen(paneTitle)}>
                    {paneTitle}{' '}
                </li>
            );
        });

        return (
            <ul className="second-nav">
                {headers}
            </ul>
        );
    }
}

export default Headers;

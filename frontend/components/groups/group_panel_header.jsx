import React from 'react';

class Headers extends React.Component {
    render() {
        const selected = this.props.selectedPanel;
        const headers = this.props.panes.map((pane, index) => {
            const title = pane.title;
            const klass = index === selected ? 'active' : '';

            return (
                <li className="show-about-body"
                    key={index}
                    className={klass}
                    onClick={() => this.props.onTabChosen(index)}>
                    {title}{' '}
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
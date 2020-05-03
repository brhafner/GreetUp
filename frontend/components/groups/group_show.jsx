import React from 'react';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
    componentDidMount() {
        this.props.requestGroup(this.props.group.id)
    }

    render() {
        return (
            <div>
                <h1>{this.props.group.title}</h1>
                <h1>{this.props.group.about}</h1>
                <Link to='/'>Return to Group Index Page</Link>
            </div>
        )
    }
}

export default GroupShow;
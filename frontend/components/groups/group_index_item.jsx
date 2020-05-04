import React from 'react';
import { Link } from 'react-router-dom';


class GroupIndexItem extends React.Component{

    render() {

        let { group, deleteGroup, currentUserId } = this.props
        

            return (
            <li>
                <Link to={`/groups/${group.id}`}>{group.title}</Link>
            </li>
        )
    }
}

export default GroupIndexItem;
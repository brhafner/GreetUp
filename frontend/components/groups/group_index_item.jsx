import React from 'react';
import { Link } from 'react-router-dom';


class GroupIndexItem extends React.Component{

    render() {

        let { group } = this.props
            return (
            <li> 
                <div>
                    <img src={group.photoUrl} className/>
                    <Link to={`/groups/${group.id}`}>{group.title}</Link>
                </div>
            </li>
        )
    }
}

export default GroupIndexItem;
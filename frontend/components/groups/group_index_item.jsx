import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({ group, deleteGroup }) => {
    return (
        <li>
            <Link to={`/groups/${group.id}`}>{group.title}</Link>
            <Link to={`/groups/${group.id}/edit`}>Edit</Link>
            <button onClick={() => deleteGroup(group.id)}></button>
        </li>
    )
}

export default GroupIndexItem;
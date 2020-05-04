import React from 'react';
import { Link } from 'react-router-dom';

import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {
    componentDidMount() {
        this.props.requestAllGroups()
    }

    render() {
        let { groups, deleteGroup } = this.props;
        if (!groups) {
            return null;
        }
        return (
            <div>
                <ul>
                    {groups.map((group) => (
                        <GroupIndexItem
                            key={group.id}
                            group={group}
                            deleteGroup={deleteGroup}
                        />
                    ))}
                </ul>
                <Link to="/groups/new">New Group</Link>
            </div>
        )
    }
}

export default GroupIndex;
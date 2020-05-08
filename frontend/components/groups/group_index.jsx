import React from 'react';
import { Link, Route } from 'react-router-dom';
import GroupIndexItem from './group_index_item';
import WelcomeHeader from '../welcome/welcome_header';

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
                <Route exact path="/groups" component={WelcomeHeader} />
                <Link to="/groups/new" className="session-submit">Create A New Group</Link>
                <div className='group-index'>
                    <ul className='categories-list'>
                        {groups.map((group) => (
                            <GroupIndexItem
                                key={group.id}
                                group={group}
                                deleteGroup={deleteGroup}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default GroupIndex;
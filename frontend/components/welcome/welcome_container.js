import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import GroupIndexContainer from '../groups/group_index_container';
import CreateGroupFormContainer from '../groups/create_group_form_container';
import EditGroupFormContainer from '../groups/edit_group_form_container';
import GroupShowContainer from '../groups/group_show_container';


const WelcomePage = (props) => {
    return (
        <div>
            
            <Switch>
                <Route path="/groups/new" component={CreateGroupFormContainer} />
                <Route path="/groups/:groupId/edit" component={EditGroupFormContainer} />
                <Route path="/groups/:groupId" component={GroupShowContainer} />  
                <Route path="/groups/" component={GroupIndexContainer} />
            </Switch> 
            {/* <GroupShowContainer /> */}
            {/* <GroupIndexContainer /> */}
            {/* refactor to show user's groups */}
            {/* <Link to='/groups'>Check out all Groups </Link>*/}
        </div>
    )
}

export default WelcomePage;
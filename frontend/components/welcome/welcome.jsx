import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import GroupIndexContainer from '../groups/group_index_container';
import CreateGroupFormContainer from '../groups/create_group_form_container';
import EditGroupFormContainer from '../groups/edit_group_form_container';
import GroupShowContainer from '../groups/group_show_container';

const WelcomePage = (props) => {
    return (
        <div>
            <div className="welcom-head">
                <div className="welcome-profile-banner">
                    <p className="maintext">Find your next event</p>
                    <p className="subtext">There is 1 event in your groups </p>
                    <p className="subtext">35 events near you</p>
                </div>       
            </div>
            
            <p>The welcome page</p>
            <Link to="/groups/">Groups Index Page</Link>
            {/* <Switch> */}
                <Route path="/groups/new" component={CreateGroupFormContainer} />
                <Route path="/groups/:groupId/edit" component={EditGroupFormContainer} />
                <Route path="/groups/:groupId" component={GroupShowContainer} />  
                <Route exact path="/groups/" component={GroupIndexContainer} />
                {/* Route === optionally render this component if it matches said route */}
            {/* </Switch>  */}
            {/* <GroupShowContainer /> */}
            {/* <GroupIndexContainer /> */}
            {/* refactor to show user's groups */}
            {/* <Link to='/groups'>Check out all Groups </Link>*/}
        </div>
    )
}

export default WelcomePage;
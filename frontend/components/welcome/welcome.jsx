import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import GroupIndexContainer from '../groups/group_index_container';
import CreateGroupFormContainer from '../groups/create_group_form_container';
import EditGroupFormContainer from '../groups/edit_group_form_container';
import GroupShowContainer from '../groups/group_show_container';
import WelcomeHeader from './welcome_header';
import WelcomeIndexItems from './welcome_index_items';

const WelcomePage = (props) => {
    return (
        <div className="welcome-page-container">
            <Route exact path="/" component={WelcomeHeader} />
            {/* <Link to="/groups/" className="session-submit">Groups Index Page</Link> */}
            {/* <Route exact path="/groups/" component={GroupIndexContainer} /> */}
           <Switch>
                <Route exact path="/groups/" component={GroupIndexContainer} />  
                <Route path="/groups/new" component={CreateGroupFormContainer} />
                <Route path="/groups/:groupId/edit" component={EditGroupFormContainer} />
                <Route path="/groups/:groupId" component={GroupShowContainer} />
                <Link to="/groups/" className="session-submit">Groups Index Page</Link>
           </Switch>
            <Route exact path="/" component={WelcomeIndexItems} />
            
            <Switch>
                {/* <Route path="/groups/new" component={CreateGroupFormContainer} />
                <Route path="/groups/:groupId/edit" component={EditGroupFormContainer} />
                <Route path="/groups/:groupId" component={GroupShowContainer} /> */}
            </Switch>
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
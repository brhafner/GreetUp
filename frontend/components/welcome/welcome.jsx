import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import GroupIndexContainer from '../groups/group_index_container';
import CreateGroupFormContainer from '../groups/create_group_form_container';
import EditGroupFormContainer from '../groups/edit_group_form_container';
import GroupShowContainer from '../groups/group_show_container';
import CreateEventContainer from '../events/create_event_form_container';
import EditEventContainer from '../events/edit_event_form_container';
import EventShowContainer from '../events/event_show_container';
import WelcomeHeader from './welcome_header';
import WelcomeIndexItemsContainer from './welcome_index_items_container';

const WelcomePage = (props) => {
    return (
        <div className="welcome-page-container">
            <Route exact path="/" component={WelcomeHeader} />
            <Switch>
                <Route exact path="/groups/" component={GroupIndexContainer} />  
                <Route path="/groups/new" component={CreateGroupFormContainer} />
                <Route path="/groups/:groupId/edit" component={EditGroupFormContainer} />
                <Route path="/groups/:groupId/events/new" component={CreateEventContainer} />
                <Route path="/groups/:groupId/events/:eventId/edit" component={EditEventContainer} />
                <Route path="/groups/:groupId/events/:eventId" component={EventShowContainer} />
                <Route exact path="/groups/:groupId" component={GroupShowContainer} />
                <Link to="/groups/" className="session-submit">Search Groups Near You</Link>
            </Switch>
            <Route exact path="/" component={WelcomeIndexItemsContainer} />
        </div>
    )
}

export default WelcomePage;
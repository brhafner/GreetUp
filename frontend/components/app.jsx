import React from "react";
import { Switch, Route } from 'react-router-dom';
import MainNav from './nav/main_nav_container';
import LoginFormContainer from './nav/login_form_container';
import SignupFormContainer from './nav/signup_form_container';
import CreateGroupFormContainer from './groups/create_group_form_container';
import EditGroupFormContainer from './groups/edit_group_form_container';
import GroupIndexContainer from './groups/group_index_container'
import { AuthRoute } from '../util/route_util';
import Homepage from './splash/homepage';
import Footer from './footer/footer';

const App = () => (
    <div>
        {/* <MainNav /> */}
        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        {/* <AuthRoute exact path="/" component={Homepage}/> */}
        {/* <Switch> */}
            <Route exact path="/" component={GroupIndexContainer} />
            {/* <Route exact path="/groups/:reportId" component={GroupShowContainer} /> */}
            <Route path="/groups/new" component={CreateGroupFormContainer} />
            <Route path="/groups/:groupId/edit" component={EditGroupFormContainer} />
        {/* </Switch> */}
        {/* <Footer /> */}
    </div>
);

export default App;
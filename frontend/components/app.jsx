import React from "react";
import { Switch, Route } from 'react-router-dom';
import MainNav from './nav/main_nav_container';
import LoginFormContainer from './nav/login_form_container';
import SignupFormContainer from './nav/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Homepage from './splash/homepage';
import Footer from './footer/footer';

import GroupIndexContainer from './groups/group_index_container';

const App = () => (
    <div>
        <MainNav />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/welcome" component={GroupIndexContainer} />
            <AuthRoute path="/" component={Homepage}/>
        </Switch>
        <Footer />
        {/* if not logged in, and path matched: it will rener this */}
        {/* stuff outside switvh is omnipresent (header/ footer) */}
    </div>
);

export default App;

// import CreateGroupFormContainer from './groups/create_group_form_container';
// import EditGroupFormContainer from './groups/edit_group_form_container';
// import GroupIndexContainer from './groups/group_index_container';
// import GroupShowContainer from './groups/group_show_container';
{/* <Switch> */ }
{/* <Route exact path="/groups/:groupId" component={GroupShowContainer} /> */ }
{/* <Route path="/groups/new" component={CreateGroupFormContainer} />
            <Route path="/groups/:groupId/edit" component={EditGroupFormContainer} />
{/* </Switch> */ }
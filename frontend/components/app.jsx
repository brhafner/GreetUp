import React from "react";
import MainNav from './nav/main_nav_container';
import LoginFormContainer from './nav/login_form_container';
import SignupFormContainer from './nav/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Homepage from './splash/homepage'

const App = () => (
    <div>
        <h1>GreetUp</h1>
        <MainNav />
        <Homepage />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;
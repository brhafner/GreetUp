import React from "react";
import { Switch } from 'react-router-dom';
import MainNav from './nav/main_nav_container';
import LoginFormContainer from './nav/login_form_container';
import SignupFormContainer from './nav/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Footer from './footer/footer';

import WelcomePage from './welcome/welcome'

const App = () => (
    <div>
        <MainNav />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/" component={WelcomePage} />
        </Switch>
        <Footer />
    </div>
);

export default App;

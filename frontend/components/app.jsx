import React from "react";
import { Switch, Route } from 'react-router-dom';
import MainNav from './nav/main_nav_container';
import LoginFormContainer from './nav/login_form_container';
import SignupFormContainer from './nav/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AboutPage from './splash/about';

import Footer from './footer/footer';

import WelcomePage from './welcome/welcome'

const App = () => (
    <div>
        <MainNav />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/about" component={AboutPage} />
            <ProtectedRoute path="/" component={WelcomePage} />
        </Switch>
        <Footer />
    </div>
);

export default App;

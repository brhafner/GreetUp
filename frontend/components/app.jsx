import React from "react";
import { Switch, Route } from 'react-router-dom';
import MainNav from './nav/main_nav_container';
import LoginFormContainer from './nav/login_form_container';
import SignupFormContainer from './nav/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer/footer';

import WelcomePage from './welcome/welcome'

const App = () => (
    <div>
        <MainNav />
        {/* <WelcomePage />
        <SignupFormContainer /> */}
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/" component={WelcomePage} />
            {/* <Route exact path="/" component={Homepage}/> */}
        </Switch>
        <Footer />
        {/* if not logged in, and path matched: it will rener this */}
        {/* stuff outside switch is omnipresent (header/ footer) */}
    </div>
);

export default App;

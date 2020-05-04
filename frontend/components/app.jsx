import React from "react";
import { Switch } from 'react-router-dom';
import MainNav from './nav/main_nav_container';
import LoginFormContainer from './nav/login_form_container';
import SignupFormContainer from './nav/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Homepage from './splash/homepage';
import Footer from './footer/footer';

import WelcomePage from './welcome/welcome_container'

const App = () => (
    <div>
        <MainNav />
        <WelcomePage />
        {/* <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/welcome" component={WelcomePage} />
            <AuthRoute path="/" component={Homepage}/>
        </Switch> */}
        <Footer />
        {/* if not logged in, and path matched: it will rener this */}
        {/* stuff outside switch is omnipresent (header/ footer) */}
    </div>
);

export default App;

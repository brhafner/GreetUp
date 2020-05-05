import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Homepage from '../components/splash/homepage';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Auth = ({loggedIn, path, exact, component: Component}) => (
    <Route
        path={path}
        exact={exact}
        render={props => loggedIn ? <Redirect to="/" /> : <Component {...props} />}
    />
)
        
const Protected = ({ loggedIn, path, exact, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        history={history}
        render={
            props => (loggedIn ? <Component {...props} /> : <Homepage {...props}/>)
        }
    />
);

const mSTP = (state) => ({
    loggedIn: Boolean(state.session.currentUserId)
})

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))



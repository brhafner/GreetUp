import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';


const Auth = ({loggedIn, path, exact, component: Component}) => (
    <Route
        path={path}
        exact={exact}
        render={props => loggedIn ? <Redirect to="/welcome" /> : <Component {...props} />}
    />
)
        
const Protected = ({ loggedIn, path, exact, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        render={
            props => (loggedIn ? <Component {...props} /> : <Redirect to="/" />)
        }
    />
);

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUserId)
})

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))



import { Route, withRouter, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    // compoment:Component allows us to pass any named component in, reusability (see app.jsx)
    //loggedIn comes from mSTP
    // path is passed in as prop from parent component rendering this one (so App, not Auth container)

    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
            // {...props} passes all inhereted props by spreading them in inline
        }
    />
);

// __________________________________________________
const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.currentUserId) };
};

export const AuthRoute = withRouter(connect(
    mapStateToProps,
    null)(Auth)
);
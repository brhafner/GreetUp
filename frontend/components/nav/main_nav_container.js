import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainNav from './main_nav';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(mSTP, mDTP)(MainNav);
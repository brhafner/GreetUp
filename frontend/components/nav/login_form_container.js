import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import SessionForm from './session_form';

const mSTP = (state, ownProps) => ({
    errors: state.errors,
    formType: 'login'
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    processDemo: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);

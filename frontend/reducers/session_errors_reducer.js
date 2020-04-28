import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'

const sessionErrorsReducer = (oldState = { errors: [] }, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // add errors
            Object.assign(nextState.errors, action.errors)
            return nextState;
        case RECEIVE_CURRENT_USER:
            // remove errors
            return Object.assign(nextState, { errors: [] });
        default:
            return oldState;
    }

}

export default sessionErrorsReducer
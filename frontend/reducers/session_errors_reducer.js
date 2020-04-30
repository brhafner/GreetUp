import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // add errors
            // Object.assign(nextState.errors, action.errors)
            // return nextState;
            return action.errors;
        case RECEIVE_CURRENT_USER:
            // remove errors
            // return Object.assign(nextState, { errors: [] });
            return [];
        default:
            return oldState;
    }

}

export default sessionErrorsReducer
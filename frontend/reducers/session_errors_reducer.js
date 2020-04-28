import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'

const sessionErrorsReducer = (state = { errors: [] }, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // add errors
            Object.assign(nextState.errors, action.errors)
            return nextState;
        case RECEIVE_CURRENT_USER:
            // remove errors
            return nextState;
        default:
            return nextState;
    }

}

export default sessionErrorsReducer
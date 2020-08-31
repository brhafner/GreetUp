import { 
    RECEIVE_EVENT_ERRORS, 
    RECEIVE_ALL_EVENTS, 
    RECEIVE_EVENT, 
    DELETE_EVENT } from '../actions/event_actions'

const eventErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_EVENT_ERRORS:
            return action.errors;
        case RECEIVE_ALL_EVENTS:
            return [];
        case RECEIVE_EVENT:
            return [];
        case DELETE_EVENT:
            return [];
        default:
            return oldState;
    }

}

export default eventErrorsReducer;
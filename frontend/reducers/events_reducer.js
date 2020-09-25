import {
    RECEIVE_ALL_EVENTS,
    RECEIVE_EVENT,
    DELETE_EVENT,
    CLEAR_EVENTS,
} from '../actions/event_actions';
import { CLEAR_GROUPS } from '../actions/group_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';


const eventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
            return Object.assign(nextState, action.events)
        case RECEIVE_EVENT:
            return Object.assign(nextState, { [action.event.id]: action.event })
        case DELETE_EVENT:
            delete nextState[action.eventId];
            return nextState;
        case CLEAR_EVENTS:
            return {};
        case CLEAR_GROUPS:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}

export default eventsReducer;
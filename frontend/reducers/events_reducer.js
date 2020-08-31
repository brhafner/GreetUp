import {
    RECEIVE_ALL_EVENTS,
    RECEIVE_EVENT,
    DELETE_EVENT
} from '../actions/event_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions'


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
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}

export default eventsReducer;
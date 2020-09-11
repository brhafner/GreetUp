import { RECEIVE_ATTENDANCE_ERRORS } from '../actions/attendance_actions';
import {
    RECEIVE_ALL_EVENTS,
    RECEIVE_EVENT,
} from '../actions/event_actions'

const attendanceErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ATTENDANCE_ERRORS:
            return action.errors;
        case RECEIVE_ALL_EVENTS:
            return [];
        case RECEIVE_EVENT:
            return [];
        default:
            return oldState;
    }

}

export default attendanceErrorsReducer
import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import groupErrorsReducer from './group_errors_reducer';
import eventErrorsReducer from './event_errors_reducer';
import memebershipErrorsReducer from './membership_errors_reducer';
import attendanceErrorsReducer from './attendance_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    group: groupErrorsReducer,
    event: eventErrorsReducer,
    memebership: memebershipErrorsReducer,
    attendance: attendanceErrorsReducer
});

export default errorsReducer;
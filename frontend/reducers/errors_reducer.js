import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import groupErrorsReducer from './group_errors_reducer';
import eventErrorsReducer from './event_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    group: groupErrorsReducer,
    event: eventErrorsReducer
});

export default errorsReducer;
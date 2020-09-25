import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import groupsReducer from './groups_reducer';
import eventsReducer from './events_reducer';
import geoCodeReducer from './geoCode_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    groups: groupsReducer,
    events: eventsReducer,
    geoCode: geoCodeReducer
});

export default entitiesReducer;
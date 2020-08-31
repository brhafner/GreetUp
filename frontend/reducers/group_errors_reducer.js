import {
    RECEIVE_GROUP_ERRORS, 
    RECEIVE_ALL_GROUPS,
    RECEIVE_GROUP,
    DELETE_GROUP } from '../actions/group_actions'

const groupErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_GROUP_ERRORS:
            return action.errors;
        case RECEIVE_ALL_GROUPS:
            return [];
        case RECEIVE_GROUP:
            return [];
        case DELETE_GROUP:
            return [];
        default:
            return oldState;
    }

}

export default groupErrorsReducer;
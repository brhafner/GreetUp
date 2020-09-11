import { RECEIVE_MEMBERSHIP_ERRORS } from '../actions/membership_actions';
import {
    RECEIVE_ALL_GROUPS,
    RECEIVE_GROUP,
} from '../actions/group_actions'

const membershipErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_MEMBERSHIP_ERRORS:
            return action.errors;
        case RECEIVE_ALL_GROUPS:
            return [];
        case RECEIVE_GROUP:
            return [];
        default:
            return oldState;
    }

}

export default membershipErrorsReducer
import { 
    RECEIVE_ALL_GROUPS,
    RECEIVE_GROUP, 
    DELETE_GROUP,
    CLEAR_GROUPS 
} from '../actions/group_actions'

import { LOGOUT_CURRENT_USER } from '../actions/session_actions'

const groupsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_GROUPS:
            return Object.assign(nextState, action.groups)
        case RECEIVE_GROUP:
            return Object.assign(nextState, { [action.group.id]: action.group })
        case DELETE_GROUP:
            delete nextState[action.groupId];
            return nextState;
        case CLEAR_GROUPS:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}

export default groupsReducer;
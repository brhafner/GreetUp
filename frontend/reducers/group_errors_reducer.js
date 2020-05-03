import { RECEIVE_GROUP_ERRORS, RECEIVE_GROUP } from '../actions/group_actions'

const groupErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_GROUP_ERRORS:
            return action.errors;
        case RECEIVE_GROUP:
            return [];
        default:
            return oldState;
    }

}

export default groupErrorsReducer
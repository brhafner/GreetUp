import { RECEIVE_GEOCODE } from '../actions/geoCode_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const geoCodeReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_GEOCODE:
            return Object.assign(nextState, action.geoCode.results[0].geometry.location)
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }

}

export default geoCodeReducer

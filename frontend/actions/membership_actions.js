import * as MembershipApiUtil from '../util/membership_api_util';
import { requestGroup } from './group_actions';

export const RECEIVE_MEMBERSHIP_ERRORS = 'RECEIVE_MEMBERSHIP_ERRORS';


const receiveErrors = (errors) => ({
    type: RECEIVE_MEMBERSHIP_ERRORS,
    errors
})


export const createMembership = (membership) => dispatch => (
    MembershipApiUtil.createMembership(membership)
        // .then(
        //     () => dispatch(requestGroup(groupId)),
        //     errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteMembership = (membership) => dispatch => (
    MembershipApiUtil.deleteMembership(membership)
        // .then(
        //     () => dispatch(requestGroup(groupId)),
        //     errors => dispatch(receiveErrors(errors.responseJSON)))
);


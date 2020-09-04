import * as MembershipApiUtil from '../util/membership_api_util';
import { requestGroup } from './group_actions';

export const RECEIVE_MEMBERSHIP_ERRORS = 'RECEIVE_MEMBERSHIP_ERRORS';


const receiveErrors = (errors) => ({
    type: RECEIVE_MEMBERSHIP_ERRORS,
    errors
})


export const createMembership = (groupId) => dispatch => (
    MembershipApiUtil.createMembership(groupId)
        .then(
            (groupId) => dispatch(requestGroup(groupId)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteMembership = (groupId) => dispatch => (
    MembershipApiUtil.deleteMembership(groupId)
        .then(
            (groupId) => dispatch(requestGroup(groupId)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);


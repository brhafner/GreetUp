import * as GroupApiUtil from '../util/group_api_util';

export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';


const receieveAllGroups = (groups) => ({
    type: RECEIVE_ALL_GROUPS,
    groups
})

const receieveGroup = (group) => ({
    type: RECEIVE_GROUP,
    group
})

const removeGroup = (groupId) => ({
    type: DELETE_GROUP,
    groupId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_GROUP_ERRORS,
    errors
})

export const requestAllGroups = () => dispatch => (
    GroupApiUtil.fetchGroups()
        .then( 
            groups => dispatch(receieveAllGroups(groups)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const requestGroup = (groupId) => dispatch => (
    GroupApiUtil.fetchGroup(groupId)
        .then(
            group => dispatch(receieveGroup(group)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const createGroup = (group) => dispatch => (
    GroupApiUtil.createGroup(group)
        .then(
            group => dispatch(receieveGroup(group)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updateGroup = (group) => dispatch => (
    GroupApiUtil.updateGroup(group)
        .then(
            group => dispatch(receieveGroup(group)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteGroup = (groupId) => dispatch => (
    GroupApiUtil.deleteGroup(groupId)
        .then(
            () => dispatch(removeGroup(groupId)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
);
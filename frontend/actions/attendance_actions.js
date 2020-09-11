import * as AttendanceApiUtil from '../util/attendance_api_util';
import { requestEvent } from './event_actions';

export const RECEIVE_ATTENDANCE_ERRORS = "RECEIVE_ATTENDANCE_ERRORS";

const receiveErrors = (errors) => ({
    type: RECEIVE_ATTENDANCE_ERRORS,
    errors
})

export const createAttendance = (groupId, eventId) => dispatch => (
    AttendanceApiUtil.createAttendance(groupId, eventId)
        .then(
            (event) => dispatch(requestEvent(event.groupId, event.id),
            (errors) => dispatch(receiveErrors(errors.responseJSON)))
        )
);

export const deleteAttendance = (eventId) => dispatch => (
    AttendanceApiUtil.deleteAttendance(eventId)
        .then(
            (event) => dispatch(requestEvent(event.groupId, event.id),
            (errors) => dispatch(receiveErrors(errors.responseJSON)))
        )
);
import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

const receieveAllEvents = (events) => ({
    type: RECEIVE_ALL_EVENTS,
    events
})

const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    event
})

const removeEvent = (eventId) => ({
    type: DELETE_EVENT,
    eventId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
})

export const requestAllEvents = () => dispatch => (
    EventApiUtil.fetchEvents()
        .then(
            events => dispatch(receieveAllEvents(events)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
);

export const requestEvent = (groupId, eventId) => dispatch => (
    EventApiUtil.fetchEvent(groupId, eventId)
        .then(
            event => dispatch(receiveEvent(event)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
);

export const createEvent = (event) => dispatch => (
    EventApiUtil.createEvent(event)
        .then(
            event => dispatch(receiveEvent(event)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
);

export const updateEvent = (event) => dispatch => (
    EventApiUtil.updateEvent(event)
        .then(
            event => dispatch(receiveEvent(event)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
);

export const deleteEvent = (eventId) => dispatch => (
    EventApiUtil.deleteEvent(eventId)
        .then(
            () => dispatch(removeEvent(eventId)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
);
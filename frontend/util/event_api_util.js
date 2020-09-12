export const fetchEvents = () => (
    $.ajax({
        url: '/api/events',
    })
)

export const fetchEvent = (groupId, eventId) => (
    $.ajax({
        url: `api/groups/${groupId}/events/${eventId}`
    })
)

export const createEvent = (event) => {
    return $.ajax({
        url: `/api/groups/${event.get('event[groupId]')}/events`,
        method: 'POST',
        data: event,
        contentType: false,
        processData: false
    })
}

export const updateEvent = (event) => {
    return $.ajax({
        url: `/api/groups/${event.get('event[groupId]')}/events/${event.get('event[eventId]')}`,
        method: 'PATCH',
        data: event,
        contentType: false,
        processData: false
    })
}

export const deleteEvent = (groupId, eventId) => (
    $.ajax({
        url: `api/groups/${groupId}/events/${eventId}`,
        method: 'DELETE'
    })
)
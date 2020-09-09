export const fetchEvents = () => (
    $.ajax({
        url: '/api/events',
    })
)

export const fetchEvent = (eventId) => (
    $.ajax({
        url: `/api/events/${eventId}`,
    })
)

export const createEvent = (event) => {
    return $.ajax({
        // url: '/api/event',
        url: `/api/groups/${event.get('event[groupId]')}/events`,
        method: 'POST',
        data: event,
        contentType: false,
        processData: false
    })
}

export const updateEvent = (event) => {
    return $.ajax({
        url: `/api/events/${event.get('event[id]')}`,
        method: 'PATCH',
        data: event,
        contentType: false,
        processData: false
    })
}

export const deleteEvent = (eventId) => (
    $.ajax({
        url: `/api/event/${eventId}`,
        method: 'DELETE'
    })
)
export const createAttendance = (eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}/attendances`,
        method: 'POST'
    })
}

export const deleteAttendance = (eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}/attendances/id`,
        method: 'DELETE'
    })
}
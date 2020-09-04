export const createMembership = (groupId) => {
    return $.ajax({
        url: `/api/groups/${groupId}/memberships`,
        method: 'POST'
        // data: membership,
        // contentType: false,
        // processData: false
    })
}

export const deleteMembership = (groupId) => {
    return $.ajax({
        url: `/api/groups/${groupId}/memberships`,
        method: 'DELETE'
    })
}
export const createMembership = (groupId) => {
    return $.ajax({
        url: `/api/groups/${groupId}/memberships`,
        method: 'POST'
    })
}

export const deleteMembership = (groupId) => {
    return $.ajax({
        url: `/api/groups/${groupId}/memberships/id`,
        method: 'DELETE'
    })
}
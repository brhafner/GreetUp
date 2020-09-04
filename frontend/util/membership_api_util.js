export const createMembership = (membership) => {
    return $.ajax({
        url: `/api/groups/${membership.groupId}/memberships`,
        method: 'POST',
        data: membership,
        contentType: false,
        // processData: false
    })
}

export const deleteMembership = (membership) => {
    return $.ajax({
        url: `/api/groups/${membership.groupId}/memberships/id`,
        method: 'DELETE',
        data: membership,
        contentType: false,
        // processData: false
    })
}
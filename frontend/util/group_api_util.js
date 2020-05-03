
export const fetchGroups = () => (
    $.ajax({
        url: '/api/groups',
    })
)

export const fetchGroup = (groupId) => (
    $.ajax({
        url: `/api/groups/${groupId}`,
    })
)

export const createGroup = (group) => (
    $.ajax({
        url: '/api/groups',
        method: 'POST',
        data: { group }
    })
)

export const updateGroup = (group) => (
    $.ajax({
        url: `/api/groups/${group.id}`,
        method: 'PATCH',
        data: { group }
    })
)

export const deleteGroup = (groupId) => (
    $.ajax({
        url: `/api/groups/${groupId}`,
        method: 'DELETE'
    })
)

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

export const createGroup = (group) => {
   return $.ajax({
        url: '/api/groups',
        method: 'POST',
        data: group,
        contentType: false,
        processData: false
    })
}

export const updateGroup = (group) => {
    return $.ajax({
        url: `/api/groups/${group.get('group[id]')}`,
        method: 'PATCH',
        data: group,
        contentType: false,
        processData: false
    })
}

export const deleteGroup = (groupId) => (
    $.ajax({
        url: `/api/groups/${groupId}`,
        method: 'DELETE'
    })
)
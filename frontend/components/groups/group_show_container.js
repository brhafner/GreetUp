import { connect } from 'react-redux';
import GroupShow from './group_show';
import { requestGroup, deleteGroup } from '../../actions/group_actions';
import { createMembership, deleteMembership } from '../../actions/membership_actions'


const mSTP = (state, ownProps) => {
    const groupId = parseInt(ownProps.match.params.groupId);
    return {
        groupId: groupId,
        group: state.entities.groups[ownProps.match.params.groupId],
        currentUserId: state.session.currentUserId
    }
}

const mDTP = (dispatch) => ({
    requestGroup: (groupId) => dispatch(requestGroup(groupId)),
    deleteGroup: (groupId) => dispatch(deleteGroup(groupId)),
    createMembership: (groupId) => dispatch(createMembership(groupId)),
    deleteMembership: (groupId) => dispatch(deleteMembership(groupId))
})

export default connect(mSTP, mDTP)(GroupShow);
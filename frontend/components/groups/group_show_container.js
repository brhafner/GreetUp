import { connect } from 'react-redux';
import GroupShow from './group_show';
import { requestGroup, deleteGroup } from '../../actions/group_actions';


const mSTP = (state, ownProps) => {
    // debugger
    return {
        group: state.entities.groups[ownProps.match.params.groupId],
        currentUserId: state.session.currentUserId
    }
}

const mDTP = (dispatch) => ({
    requestGroup: (groupId) => dispatch(requestGroup(groupId)),
    deleteGroup: (groupId) => dispatch(deleteGroup(groupId))
})

export default connect(mSTP, mDTP)(GroupShow);
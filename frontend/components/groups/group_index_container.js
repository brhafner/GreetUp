import { connect } from 'react-redux';

import GroupIndex from './group_index';
import { requestAllGroups, deleteGroup } from '../../actions/group_actions';


const mSTP = (state) => ({
    groups: Object.values(state.entities.groups)
})

const mDTP = (dispatch) => ({
    requestAllGroups: () => dispatch(requestAllGroups()),
    deleteGroup: (groupId) => dispatch(deleteGroup(groupId))
})

export default connect(mSTP, mDTP)(GroupIndex);
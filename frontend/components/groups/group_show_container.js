import { connect } from 'react-redux';
import GroupShow from './group_show';
import { requestGroup } from '../../actions/group_actions';


const mSTP = (state, ownProps) => ({
    group: state.entities.groups[ownProps.match.params.groupId]
})

const mDTP = (dispatch) => ({
    requestGroup: (groupId) => dispatch(requestGroup(groupId))
})

export default connect(mSTP, mDTP)(GroupShow);
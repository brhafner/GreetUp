import { connect } from 'react-redux';
import EventShow from './event_show';
import { requestEvent, deleteEvent } from '../../actions/event_actions';
import { createAttendance, deleteAttendance } from '../../actions/attendance_actions';
import { requestGroup } from '../../actions/group_actions'


const mSTP = (state, ownProps) => ({
    groupId: parseInt(ownProps.match.params.groupId),
    group: state.entities.groups[ownProps.match.params.groupId],
    eventId: parseInt(ownProps.match.params.eventId),
    event: state.entities.events[ownProps.match.params.eventId],
    currentUserId: state.session.currentUserId
})

const mDTP = (dispatch) => ({
    requestEvent: (groupId, eventId) => dispatch(requestEvent(groupId, eventId)),
    deleteEvent: (groupId, eventId) => dispatch(deleteEvent(groupId, eventId)),
    createAttendance: (eventId) => dispatch(createAttendance(eventId)),
    deleteAttendance: (eventId) => dispatch(deleteAttendance(eventId)),
    requestGroup: (groupId) => dispatch(requestGroup(groupId))
})

export default connect(mSTP, mDTP)(EventShow);
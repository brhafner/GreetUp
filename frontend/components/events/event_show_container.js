import { connect } from 'react-redux';
import EventShow from './event_show';
import { requestEvent, deleteEvent } from '../../actions/event_actions';
// import { createMembership, deleteMembership } from '../../actions'


const mSTP = (state, ownProps) => ({
    groupId: parseInt(ownProps.match.params.groupId),
    eventId: parseInt(ownProps.match.params.eventId),
    event: state.entities.events[ownProps.match.params.eventId],
    currentUserId: state.session.currentUserId
})

const mDTP = (dispatch) => ({
    requestEvent: (groupId, eventId) => dispatch(requestEvent(groupId, eventId)),
    deleteEvent: (groupId, eventId) => dispatch(deleteEvent(groupId, eventId)),
    // createMembership: (groupId) => dispatch(createMembership(groupId)),
    // deleteMembership: (groupId) => dispatch(deleteMembership(groupId))
})

export default connect(mSTP, mDTP)(EventShow);
// WITH ROUTER?!
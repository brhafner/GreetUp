import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mSTP = (state, ownProps) => ({
    event: {
        // id: event.id?
        name: "",
        details: "",
        day: "",
        startTime: "",
        duration: "",
        digital: true,
        address: "",
        // groupId: state.entities.groups[ownProps.match.path.groupId],
        groupId: parseInt(ownProps.match.params.groupId),
        hostId: state.session.currentUserId
    },
    formType: "Create",
    errors: state.errors.event
})

const mDTP = (dispatch) => ({
    action: (event) => dispatch(createEvent(event))
})

export default withRouter(connect(mSTP, mDTP)(EventForm));
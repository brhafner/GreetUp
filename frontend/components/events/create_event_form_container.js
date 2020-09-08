import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mSTP = (state) => ({
    // group: state.entities.groups[ownProps.match.params.groupId],
    event: {
        name: "",
        details: "",
        day: "",
        startTime: "",
        duration: "",
        digital: true,
        address: "",
        groupId: state.entities.groups[ownProps.match.params.groupId],
        hostId: state.session.currentUserId
    },
    formType: "Create",
    errors: state.errors.event
})

const mDTP = (dispatch) => ({
    action: (event) => dispatch(createEvent(event))
})

export default withRouter(connect(mSTP, mDTP)(EventForm));
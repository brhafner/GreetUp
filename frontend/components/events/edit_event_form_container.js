import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form'

import { withRouter } from 'react-router-dom';

class EditEventForm extends React.Component {

    componentDidMount() {
        this.props.requestEvent(this.props.groupId, this.props.eventId)
    }

    render() {
        const { action, formType, event, eventId, groupId, errors, history } = this.props;

        if (!event) {
            return null;
        }
        return (
            <EventForm
                event={event}
                eventId={eventId}
                groupId={groupId}
                formType={formType}
                errors={errors}
                action={action}
                history={history}
            />
        );
    }
}


const mSTP = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    eventId: parseInt(ownProps.match.params.eventId),
    groupId: parseInt(ownProps.match.params.groupId),
    formType: 'Update',
    errors: state.errors.event
})

const mDTP = (dispatch) => ({
    action: (event) => dispatch(updateEvent(event)),
    requestEvent: (groupId, eventId) => dispatch(requestEvent(groupId, eventId)),
})

export default withRouter(connect(mSTP, mDTP)(EditEventForm));
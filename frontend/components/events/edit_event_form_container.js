import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form'

import { withRouter } from 'react-router-dom';

class EditEventForm extends React.Component {

    componentDidMount() {
        this.props.requestEvent(this.props.event.id)
    }

    render() {
        const { action, formType, event, errors, history } = this.props;

        if (!event) {
            return null;
        }
        return (
            <EventForm
                event={event}
                formType={formType}
                errors={errors}
                action={action}
                history={history}
            />
        );
    }
}


const mSTP = (state, ownProps) => ({
    group: state.entities.groups.events[ownProps.match.params.eventId],
    formType: 'Update',
    errors: state.errors.event
})

const mDTP = (dispatch) => ({
    action: (event) => dispatch(updateEvent(event)),
    requestEvent: (eventId) => dispatch(requestEvent(eventId))
})

export default withRouter(connect(mSTP, mDTP)(EditEventForm));
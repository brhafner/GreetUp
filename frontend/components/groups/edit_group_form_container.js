import React from 'react';
import { connect } from 'react-redux';
import { requestGroup, updateGroup } from '../../actions/group_actions';
import GroupForm from './group_form'

import {withRouter} from 'react-router-dom';

class EditGroupForm extends React.Component {

    componentDidMount() {
        // this.props.requestGroup(this.props.group.id)
        this.props.requestGroup(this.props.group.id)
        // this.props.requestGroup(this.state.groups[ownProps.match.params.groupId])
        // may need to match.params this, but test in browser
    }

    render() {
        const { action, formType, group, errors, history} = this.props;

        if (!group) {
            return null;
        }
        return (
            <GroupForm
                group={group} 
                formType={formType}
                errors={errors}
                action={action}
                history={history}
                />
        );
    }
}


const mSTP = (state, ownProps) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    formType: 'Update',
    errors: state.errors.group
})

const mDTP = (dispatch) => ({
    action: (group) => dispatch(updateGroup(group)),
    requestGroup: (groupId) => dispatch(requestGroup(groupId))
})

export default withRouter(connect(mSTP, mDTP)(EditGroupForm));
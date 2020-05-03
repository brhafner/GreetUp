import React from 'react';
import { connect } from 'react-redux';
import { requestGroup, updateGroup } from '../../actions/group_actions';
import GroupForm from './group_form'

class EditGroupForm extends React.Component {

    componentDidMount() {
        // this.props.requestGroup(this.props.group.id)
        this.props.requestGroup(this.props.group.id)
        // this.props.requestGroup(this.state.groups[ownProps.match.params.groupId])
        // may need to match.params this, but test in browser
    }

    render() {
        const { action, formType, group } = this.props;

        if (!group) {
            return null;
        }
        return (
            <GroupForm
                action={action}
                formType={formType}
                group={group} />
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

export default connect(mSTP, mDTP)(EditGroupForm);
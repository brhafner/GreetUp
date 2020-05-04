import React from 'react';
import { connect} from 'react-redux';
import { createGroup } from '../../actions/group_actions';
import GroupForm from './group_form';

const mSTP = (state) => ({
    group: { 
         title: "",
         about: "", 
         organizerId: "", 
         cityId: "",
         category: "" 
        },
    formType: "Create",
    errors: state.errors.group
})

const mDTP = (dispatch) => ({
    action: (group) => dispatch(createGroup(group))
})

export default connect(mSTP, mDTP)(GroupForm);
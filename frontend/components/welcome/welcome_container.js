import React from 'react';
import GroupIndexContainer from './groups/group_index_container';

// import CreateGroupFormContainer from './groups/create_group_form_container';
// import EditGroupFormContainer from './groups/edit_group_form_container';
// import GroupShowContainer from './groups/group_show_container';


const WelcomePage = (props) => {
    return (
        <div>
            {/* refactor to show user's groups */}
            <GroupIndexContainer/>
        </div>
    )
}

// const mSTP = (state, ownProps) => ({
    
// })

{/* <Switch> */ }
{/* <Route exact path="/groups/:groupId" component={GroupShowContainer} /> */ }
{/* <Route path="/groups/new" component={CreateGroupFormContainer} />
            <Route path="/groups/:groupId/edit" component={EditGroupFormContainer} />
{/* </Switch> */ }

export default WelcomePage;
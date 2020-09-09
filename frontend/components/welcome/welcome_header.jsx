import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { matchPath } from 'react-router';

// function getParams({pathname}) {
//     debugger
//     const match = matchPath(pathname, {
//         path: "/groups/",
//         exact: true,
//         strict: false
//     });
//     !!match ? <Link to="/groups/" className="group-index-button">Search Groups Near You</Link> : 
//     <Link to="/groups/new" className="group-index-button">Create A New Group</Link> ;

// };

const WelcomeHeader = (props) => {
    return(
        <div className="welcom-head">
            <div className="welcome-profile-banner">
                <p className="maintext">Find your next event</p>
                <p className="subtext">There are 4 event in your groups </p>
                <p className="subtext">35 events happening near you</p>
                {/* {getParams(this.props.location.pathname)} */}
            </div>
        </div>
    )
}

export default WelcomeHeader;
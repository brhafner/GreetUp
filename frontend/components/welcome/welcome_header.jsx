import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { matchPath } from 'react-router';

const WelcomeHeader = (props) => {
    return(
        <div className="welcom-head">
            <div className="welcome-profile-banner">
                <p className="maintext">Find your next event</p>
                <p className="subtext">There are 4 event in your groups </p>
                <p className="subtext">35 events happening near you</p>
            </div>
        </div>
    )
}

export default WelcomeHeader;
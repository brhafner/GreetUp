// import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import GroupPanel from './group_panel';


// const events = <div className="welcome-item">
//     <span className="welcome-item-time">6:00pm</span>
//     <span>
//         <p>MINGLE WITH TRAVELERS, STUDENTS, AU PAIRS &amp; LOCALS IN SF</p>
//         <p>BACKPACKER OLYMPICS PARTY with International Travelers &amp; Locals EVERY FRIDAY</p>
//         <p>47 International Partiers going</p>
//     </span>
// </div>

// const members = <div className="welcome-item">
//     <span className="welcome-item-time">6:00pm</span>
//     <span>
//         <p>A collection of members profile pictures</p>
//     </span>
// </div>

// const photos = <div className="welcome-item">
//     <span className="welcome-item-time">6:00pm</span>
//     <span>
//         <p>A collection of pictures from group.events.photos</p>
//     </span>
// </div>

// const mSTP = (state) => ({
//     group: state.entities.groups[ownProps.match.params.groupId],
//     events,
//     members,
//     photos,
    
// })


// export default withRouter(connect(mSTP, null)(GroupPanel));



    < ul className = "second-nav" >
        <li>About</li>
        <li>Events</li>
        <li>Members</li>
        <li>Photos</li>
        <li><button className="session-submit">Join Group</button></li>
                </ul >
    <div className="item-show-content">

        <div className="left">
            <p className="show-about-title">What we're about</p>
            {/* Insert Below: */}
            {/* {this.props.group.about} */}
            <p className="show-about-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
        </div>
        <div className='right'>
            <p className="show-about-title">Organizers</p>
            <div>
                <p>Organizer_PHOTO</p>
                <p>Organizer_FirstName</p>
            </div>
        </div>

    </div>
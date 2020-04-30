import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="header-render">
            <p>LOGO HUR</p>
            <p>Welcome, {currentUser.firstName}</p>
            <button className='nav-button' onClick={logout}>Log Out</button>
        </div>
    ) : (
            <div className="header-render">
                <span>LOGO HUR</span>
                <div>
                    <Link className="nav-button" to="/signup">Sign Up</Link>
                    <Link className="nav-button" to="/login">Log In</Link>
                </div>
            </div>
        )

    return (
        <div className={'header-nav'}>
            {display}
        </div>
    );
};
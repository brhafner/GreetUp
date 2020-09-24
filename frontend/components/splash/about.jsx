import React from 'react';
import { NavLink } from 'react-router-dom';

function AboutPage(){
    return (
        <div className='about-banner'>
            <p>GreetUp creates possibilities</p>
            <p>GreetUp is inpsired by MeetUp and is a platform for finding and building 
                local communities. People use GreetUp to meet new people, 
                learn new things, find support, get out of their comfort 
                zones, and pursue their passions, together.
            </p>
            <NavLink className="banner-button" to="/signup">Join GreetUp</NavLink>
        </div>
    )
}

export default AboutPage;
import React from 'react';

const WelcomeIndexItems = (props) => {
    const d = new Date()
    return (
        <div className="welcome-item-show-container">
            <span>{d.toDateString()}</span>
            <div className="welcome-item">
                <span className="welcome-item-time">8:00pm</span>
                <span>
                    <p>OFFBEAT SAN FRANCISCO</p>
                    <p>Indian Curry, Comedy Show &amp; $2 Beers! (EVERY THURSDAY)</p>
                    <p>1 going</p>
                </span>
            </div>
            <div className="welcome-item">
                <span className="welcome-item-time">6:00pm</span>
                <span>
                    <p>MINGLE WITH TRAVELERS, STUDENTS, AU PAIRS &amp; LOCALS IN SF</p>
                    <p>BACKPACKER OLYMPICS PARTY with International Travelers &amp; Locals EVERY FRIDAY</p>
                    <p>47 International Partiers going</p>
                </span>
            </div>
            <div className="welcome-item">
                <span className="welcome-item-time">1:00pm</span>
                <span className="welcome-item-details">
                    <p>THE SAN FRANCISCO ENGLISH BULLDOG MEETUP GROUP</p>
                    <p>The San Francisco English Bulldog Monthly Meetup</p>
                    <p>6 SF Bulldoggers going</p>
                </span>
            </div>
        </div>
    )
}

export default WelcomeIndexItems;
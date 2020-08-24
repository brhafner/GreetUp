import React from 'react';
import { NavLink } from 'react-router-dom';


class Homepage extends React.Component {

    render(){
        return(
            <div>
                <div className="top-banner">
                    <p className="headline">The real world is calling</p>
                    <p className="tagline">Join a local group to meet people, try something new, or do more of what you love.</p>
                    {/* <button className="banner-button">Join GreetUp</button> */}
                    <NavLink className="banner-button" to="/signup">Join GreetUp</NavLink>
                    {/* need to change to link but width not rendering on link, when it does on button */}
                </div>
                <video id="banner-vid" autoPlay loop muted>
                    <source src={window.banner} type="video/mp4" />
                        Your browser does not support this video.
                </video>
                {/* <ul className="topline-group-links">
                    <li>Join a movement</li>
                    <li>Learn to cook</li>
                    <li>Train for a marathon</li>
                    <li>Build a mobile app</li>
                    <li>Hike a mountain</li>
                </ul> */}
                <div className="categories-list-container">
                    <h3 className="headline">Categories</h3>
                    <p className="tagline">Browse groups by topics you're interested in.</p>
                    <ul className="categories-list">
                        <li>
                            <img src={window.outdoors} className="home-cats" />
                            <a href="">Outdoor &amp; Adventure</a>
                        </li>
                        <li>
                            <img src={window.pets} className="home-cats"/>
                            <p>Pets</p>
                        </li>
                        <li>
                            <img src={window.learning} className="home-cats"/>
                            <a href="">Learning</a>
                        </li>
                        <li>
                            <img src={window.movement} className="home-cats"/>
                            <a href="">Movements</a>
                        </li>
                        <li>
                            <img src={window.food} className="home-cats"/>
                            <a href="">Food &amp; Drink</a>
                        </li>
                        <li>
                            <img src={window.movement} className="home-cats" />
                            <a href="">Sports &amp; Fitness</a>
                        </li>
                        <li>
                            <img src={window.photography} className="home-cats"/>
                            <a href="">Photography</a>
                        </li>
                        <li>
                            <img src={window.language} className="home-cats"/>
                            <a href="">Language &amp; Culture</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Homepage;
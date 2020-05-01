import React from 'react';

class Homepage extends React.Component {

    render(){
        return(
            <div>
                <div className="top-banner">
                    <p className="headline">The real world is calling</p>
                    <p className="tagline">Join a local group to meet people, try something new, or do more of what you love.</p>
                    <button className="banner-button">Join GreetUp</button>
                </div>
                <ul className="topline-group-links">
                    <li>Join a movement</li>
                    <li>Learn to cook</li>
                    <li>Train for a marathon</li>
                    <li>Build a mobile app</li>
                    <li>Hike a mountain</li>
                </ul>
                <div className="categories-list-container">
                    <h3 className="headline">Categories</h3>
                    <p className="tagline">Browse groups by topics you're interested in.</p>
                    <ul className="categories-list">
                        <li>
                            <a href="#">-- IMAGE --</a>
                            <a href="">Outdoor &amp; Adventure</a>
                        </li>
                        <li>
                            <a href="#">-- IMAGE --</a>
                            <p>Tech</p>
                        </li>
                        <li>
                            <a href="#">-- IMAGE --</a>
                            <a href="">Learning</a>
                        </li>
                        <li>
                            <a href="#">-- IMAGE --</a>
                            <a href="">Movementes</a>
                        </li>
                        <li>
                            <a href="#">-- IMAGE --</a>
                            <a href="">Food &amp; Drink</a>
                        </li>
                        <li>
                            <a href="#">-- IMAGE --</a>
                            <a href="">Sports &amp; Fitness</a>
                        </li>
                        <li>
                            <a href="#">-- IMAGE --</a>
                            <a href="">Photography</a>
                        </li>
                        <li>
                            <a href="#">-- IMAGE --</a>
                            <a href="">Language &amp; Culture</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Homepage;
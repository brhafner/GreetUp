import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
    

    render(){
        return (
            <div>
                <div className="footer-container">
                    <ul>
                        <li className="li-top">Your Account</li>
                        <li><Link className="nav-button" to="/signup">Sign Up</Link></li>
                        <li><Link className="nav-button" to="/login">Log In</Link></li>
                    </ul>
                    <ul>
                        <li className="li-top">Discover</li>
                        <li>Groups</li>
                        <li>Calendar</li>
                        <li>Cities</li>
                    </ul>
                    <ul>
                        <li className="li-top">GreetUp</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="last-foot">
                    <br/>
                    <span>© 2020 Geetup LLC</span>
                </div>
            </div>
        )
    }
}

export default Footer;
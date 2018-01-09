import React from 'react';
import LandingModal from './LandingModal';
import "./Landing.css"


const Landing = () => {

    return (

    <div className="landing-container">
        <div className="row" >
            <h3 className="center-align">Code. Create. Network.</h3>

            {/* open LandingModal here */}
            <button className="learn-more modal-trigger" onClick={this.LandingModal}>Learn More</button>
            
        </div>
    </div>
            
    );
};

export default Landing;
import React from 'react';
import ProfileLayout from './profile/ProfileLayout';
import OpenProjectList from './openProjects/OpenProjectList';


const Main = () => {
    return (
        <div>
            <h5>Main Page when logged in.</h5>
            
            <div className="row">
                <div className="col s12">This div is 12-columns wide on all screen sizes</div>
                <div className="col s8"><OpenProjectList /></div>
                <div className="col s4"><ProfileLayout /></div>
            </div>

        </div>
    );
};

export default Main;


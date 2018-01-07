import React from 'react';
import ProfileLayout from './profile/ProfileLayout';
import OpenProjectList from './openProjects/OpenProjectList';


const Main = () => {
    return (
        <div>
            <h1>Main Page when logged in.</h1>
            
            <div className="row">
                <div className="col s12">This div is 12-columns wide on all screen sizes</div>
                <div className="col s8">8-columns=======<OpenProjectList /></div>
                <div className="col s4">4-columns=======<ProfileLayout /></div>
            </div>

        </div>
    );
};

export default Main;


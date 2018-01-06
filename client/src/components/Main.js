import React from 'react';
import ProfileLayout from './profile/ProfileLayout';

const Main = () => {
    return (
        <div>
            <h1>Main Page when logged in.</h1>
            
            <div className="row">
                <div className="col s12">This div is 12-columns wide on all screen sizes</div>
                <div className="col s7">7-columns=======</div>
                <div className="col s5">5-columns=======<ProfileLayout /></div>
            </div>

        </div>
    );
};

export default Main;


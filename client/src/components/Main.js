import React from 'react';
import ProfileLayout from './profile/ProfileLayout';
import OpenProjectList from './openProjects/OpenProjectList';


const Main = () => {
    return (
        <div className="row">
            <div className="col s8"><OpenProjectList /></div>
            <div className="col s4"><ProfileLayout /></div>
        </div>

    );
};

export default Main;


import "./Main.css";
import React from 'react';
import ProfileLayout from './profile/ProfileLayout';
import OpenProjectList from './openProjects/OpenProjectList';


const Main = () => {
    return (
        <div className="container" id="main-content">
            <div className="row">
                <div className="col s8 project-main"><OpenProjectList /></div>
                <div className="col s4 profile-main"><ProfileLayout /></div>
            </div>
            <footer className="page-footer">
                <div className="container">
                    <div className="row" id="footer-box">
                        <div className="col l6 s12">
                            <p className="grey-text text-lighten-4 footer-text"> © 2018 Cod-Op</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Main;


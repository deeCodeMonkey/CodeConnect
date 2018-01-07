import React from 'react';

const OpenProjectProfile = (props) => {

    return (
        <div>
            <h5>PROJECT PROFILE</h5>
            <h6>PROJECTID{props.projectId}</h6>
            <h6>{props.title}</h6>
            <h6>{props.dueDate}</h6>
            <h6>{props.requirements}</h6>
            <h6>{props.projectOwner}</h6>
            <h6>{props.image}</h6>
            <h6>{props.description}</h6>
            <h6>{props.location}</h6>
            <button>Add Project to User</button>
        </div>
    );
};


export default OpenProjectProfile;
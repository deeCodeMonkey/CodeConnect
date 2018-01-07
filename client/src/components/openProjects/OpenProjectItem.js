import React from 'react';

const OpenProjectItem = (props) => {

    return (
        <div>
            <h5>PROJECT ITEM</h5>
            <h6>{props.title}</h6>
            <h6>{props.dueDate}</h6>
            <h6>{props.requirements}</h6>
        </div>
    );
};

export default OpenProjectItem;
import React from 'react';

export default (props) => {

    return (
        <div>
            <h6>{props.title}</h6>
            <h6>{props.dueDate}</h6>
            <h6>{props.requirements}</h6>
        </div>
    );
};
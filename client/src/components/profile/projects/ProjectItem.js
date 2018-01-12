import "./ProjectItem.css";
import React from 'react';
import moment from 'moment';

export default (props) => {

    const dueDate = moment(props.dueDate).format('LL');

    return (
        <div>
            <div className="card horizontal my-project-card">

                <div className="card-stacked">
                    <div className="card-content">
                        <h6>{props.headline}</h6>
                        <h6>From: {props.projectOwner}</h6>
                        <h6>Project: {props.title}</h6>
                        <h6>Deadline: {dueDate}</h6>
                        <h6>Requirements: {props.requirements}</h6>
                    </div>

{/* ADD MODAL HERE THAT SHOWS ALL INFO FOR CLAIMED PROJECTS??? */}
                </div>
            </div>
        </div>
    );
};
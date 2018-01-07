import React, { Component } from 'react';
import OpenProjectModal from './OpenProjectModal';

class OpenProjectItem extends Component { 

    state = {
        projectModal: undefined,
    }

    handleOnClick = () => {
        this.setState({
            projectModal: true
        });
    }

    closeModalonClick = () => {
        this.setState({
            projectModal: false
        });
    }

    render() {
        return (
            <div>
                <h5>PROJECT ITEM</h5>
                <h6>{this.props.title}</h6>
                <h6>{this.props.dueDate}</h6>
                <h6>{this.props.requirements}</h6>
                <button onClick={this.handleOnClick}>{this.props._id}</button>
                <OpenProjectModal projectModal={this.state.projectModal} closeModal={this.closeModalonClick} projectId={this.props._id}/>
            </div>
        );
    }
};

export default OpenProjectItem;
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
        
        window.location.href = "/Main";
    }

    render() {
        return (
            <div>
                <h5>{this.props.title}</h5>
                <div>
                    <img className="circle responsive-img" src={this.props.image} alt="photo" />
                </div>
                <h6>{this.props.dueDate}</h6>
                <h6>{this.props.requirements}</h6>
                <button onClick={this.handleOnClick}>View Detail</button>
                <OpenProjectModal projectModal={this.state.projectModal} closeModal={this.closeModalonClick} projectId={this.props._id}/>
            </div>
        );
    }
};

export default OpenProjectItem;
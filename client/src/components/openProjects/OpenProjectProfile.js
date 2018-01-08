import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class OpenProjectProfile extends Component {

    componentDidMount() {
        this.props.fetchProjectById(this.props.projectId);
    }

    render() {
        return (
            <div>
                <h5>PROJECT PROFILE</h5>
                <h6>{this.props.openProject.projectOwner}</h6>
                <h6>{this.props.openProject.location}</h6>
                <h6>{this.props.openProject.image}</h6>
                <h6>{this.props.openProject.title}</h6>
                <h6>{this.props.openProject.dueDate}</h6>
                <h6>{this.props.openProject.requirements}</h6>
                <h6>{this.props.openProject.description}</h6>

                <button>Add Project to User</button>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        openProject: state.openProject
    };
}

export default connect(mapStateToProps, actions)(OpenProjectProfile);
import "./OpenProjectProfile.css"
import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class OpenProjectProfile extends Component {

    componentDidMount() {
        this.props.fetchProjectById(this.props.projectId);
    }

    onClickHandler = () => {
        console.log('auth', this.props.auth._id);
        this.props.assignProjectToUser(this.props.auth._id, this.props.projectId);
    }

    render() {

        const dueDate = moment(this.props.openProject.dueDate).format('LL');

        return (
            <div id="open-project-info">
                <h6><em>Headline: </em>             {this.props.openProject.headline}</h6>
                <h6><em>Owner: </em>                {this.props.openProject.projectOwner}</h6>
                <h6><em>Location: </em>             {this.props.openProject.location}</h6>
                <h6><em>Title: </em>                {this.props.openProject.title}</h6>
                <h6><em>Due: </em>                  {dueDate}</h6>
                <h6><em>Requirements: </em>         {this.props.openProject.requirements}</h6>
                <h6><em>Full Description: </em>     {this.props.openProject.description}</h6>
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
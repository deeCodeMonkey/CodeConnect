import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import * as actions from '../../actions';

class ProfileInfo extends Component {

    render() {
        return (
            <div>
                <div>
                    <label>Headline</label>
                    <div>{this.props.userData.headline}</div>
                </div>
                <div>
                    <label>Full Name</label>
                    <div>{this.props.userData.fullName}</div>
                </div>
                <div>
                    <label>Photo</label>
                    <div>{this.props.userData.photo}</div>
                </div>
                <div>
                    <label>Location</label>
                    <div>{this.props.userData.location}</div>
                </div>
                <div>
                    <label>About Me</label>
                    <div>{this.props.userData.aboutMe}</div>
                </div>
                <div>
                    <label>Skills</label>
                    <div>{this.props.userData.skills}</div>
                </div>
                <div>
                    <label>Sites</label>
                    <div>{this.props.userData.linkedInProfile}</div>
                    <div>{this.props.userData.gitHub}</div>
                    <div>{this.props.userData.stackOverflow}</div>
                    <div>{this.props.userData.portfolioSite}</div>
                </div>
                    <button type="button" className="blue btn-flat right white-text" onClick={this.props.onEditProfile}>
                        Edit Profile
                    </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('ALL STATES', state);
    console.log('PROFILE STATE', state.profile.profileData);
    return {
        userData: state.auth
        //formValues: state.profile
    };
}

export default connect(mapStateToProps, actions)(ProfileInfo);


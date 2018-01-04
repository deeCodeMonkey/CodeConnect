import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from './projects/ProjectList';

class ProfileInfo extends Component {

    render() {
        return (
            <div>
                <div>
                    <label>Headline</label>
                    <div>{this.props.formValues.headline}</div>
                </div>
                <div>
                    <label>Full Name</label>
                    <div>{this.props.formValues.fullName}</div>
                </div>
                <div>
                    <label>Photo</label>
                    <div>{this.props.formValues.photo}</div>
                </div>
                <div>
                    <label>Location</label>
                    <div>{this.props.formValues.location}</div>
                </div>
                <div>
                    <label>About Me</label>
                    <div>{this.props.formValues.aboutMe}</div>
                </div>
                <div>
                    <label>Skills</label>
                    <div>{this.props.formValues.skills}</div>
                </div>
                <div>
                    <label>Sites</label>
                    <div>{this.props.formValues.linkedInProfile}</div>
                    <div>{this.props.formValues.gitHub}</div>
                    <div>{this.props.formValues.stackOverflow}</div>
                    <div>{this.props.formValues.portfolioSite}</div>
                </div>
                <button type="button" className="blue btn-flat right white-text" onClick={this.props.onEditProfile}>
                    Edit Profile
                    </button>

                < ProjectList />

            </div>
        );
    }
}

function mapStateToProps(state) {
    //console.log('ALL REDUCERS-STATE', state);
    //console.log('PROFILE REDUCER-STATE', state.profile.skills);
    return {
        userData: state.auth,
        formValues: state.profile
    };
}

export default connect(mapStateToProps)(ProfileInfo);


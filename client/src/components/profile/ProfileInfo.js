import "./ProfileInfo.css";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ProjectList from './projects/ProjectList';
import linkedin from '../../assets/icon-linkedin.png';
import github from '../../assets/icon-github.png';
import stackOverflow from '../../assets/icon-stack.png';
import portfolio from '../../assets/icon-portfolio.png';


class ProfileInfo extends Component {

    async componentDidMount() {
        await this.props.fetchUser()
        if (this.props.userData._id) {
            this.props.fetchUserProjects(this.props.userData._id)
        }
    }


    render() {

        return (
            <div className="row">
                <div className="col s12 m12">

                    <div id="profile-title" className="valign-wrapper heading">
                        <h4>PROFILE</h4>
                    </div>

                    <div className="card profile-card">
                        <div className="card-image">
                            <img className="circle responsive-img profile-image" src={this.props.formValues.photo} alt="photo" />
                        </div>

                        <div className="card-content">

                            <div id="profile-snippet">
                                <div>
                                    <h5>{this.props.formValues.fullName}</h5>
                                </div>
                                <div>
                                    <h6>{this.props.formValues.headline}</h6>
                                </div>
                                <div>
                                    <h6>{this.props.formValues.location}</h6>
                                </div>
                            </div>

                            <div id="about-me">
                                {
                                    (this.props.formValues.aboutMe)
                                        ? <label><em>About Me</em></label>
                                        : ''
                                }
                                <div>{this.props.formValues.aboutMe}</div>
                            </div>

                            <div id="skills">
                                {
                                    (this.props.formValues.skills)
                                        ? <label><em>Skills</em></label>
                                        : ''
                                }
                                <div>{this.props.formValues.skills}</div>
                            </div>

                            <div>
                                <button type="button" className="btn" id="edit-profile-button" onClick={this.props.onEditProfile}>
                                    Edit Profile
                                </button>
                            </div>
                        </div>

                        <div className="card-action">
                            <div>
                                <div className="row">
                                    <div className="col s12">
                                        <a href={this.props.formValues.linkedInProfile} target="_blank"><img src={linkedin} className="icon-site" alt="linkedin" /></a>

                                        <a href={this.props.formValues.gitHub} target="_blank"><img src={github} className="icon-site" alt="github" /></a>

                                        <a href={this.props.formValues.stackOverflow} target="_blank"><img src={stackOverflow} className="icon-site" alt="stackoverflow" /></a>

                                        <a href={this.props.formValues.portfolioSite} target="_blank"><img src={portfolio} className="icon-site" alt="portfolio" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col sm12 m12">
                    <div id="my-projects-title" className="valign-wrapper heading">
                        <h4>MY PROJECTS</h4>
                    </div>

                    <div>
                        < ProjectList />
                    </div>
                </div>
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

export default connect(mapStateToProps, actions)(ProfileInfo);



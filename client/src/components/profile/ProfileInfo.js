import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ProjectList from './projects/ProjectList';
import linkedin from '../../assets/icon-linkedin.png';
import github from '../../assets/icon-github.png';
import stackOverflow from '../../assets/icon-stack.png';
import portfolio from '../../assets/icon-portfolio.png';
import './index.css';

class ProfileInfo extends Component {

    async componentDidMount() {
        await this.props.fetchUser()
        if (this.props.userData._id) {
            //this.props.fetchProfile(this.props.userData._id);
            this.props.fetchUserProjects(this.props.userData._id)
        }
    }


    render() {

        return (
            <div>
                <div>
                    <div>
                        <label>Headline</label>
                        <div>{this.props.formValues.headline}</div>
                    </div>
                    <div>
                        <label>Photo</label>
                        <img className="circle responsive-img" src={this.props.formValues.photo} alt="photo" />
                        <div>{this.props.formValues.photo}</div>
                    </div>
                    <div>
                        <div><h5>{this.props.formValues.fullName}</h5></div>
                    </div>

                    <div>
                        <label>Location</label>
                        <div>{this.props.formValues.location}</div>
                    </div>
                    <div>
                        {
                            (this.props.formValues.aboutMe)
                                ? <label>About Me</label>
                                : ''
                        }
                        <div>{this.props.formValues.aboutMe}</div>
                    </div>
                    <div>
                        {
                            (this.props.formValues.skills)
                                ? <label>Skills</label>
                                : ''
                        }
                        <div>{this.props.formValues.skills}</div>
                    </div>
                    <div>
                        <label>Sites</label>

                        <a href={this.props.formValues.linkedInProfile}><img src={linkedin} className="icon-site" alt="linkedin" /></a>
                        <div>{this.props.formValues.linkedInProfile}</div>

                        <a href={this.props.formValues.gitHub}><img src={github} className="icon-site" alt="github" /></a>
                        <div>{this.props.formValues.gitHub}</div>

                        <a href={this.props.formValues.stackOverflow}><img src={stackOverflow} className="icon-site" alt="stackoverflow" /></a>
                        <div>{this.props.formValues.stackOverflow}</div>

                        <a href={this.props.formValues.portfolioSite}><img src={portfolio} className="icon-site" alt="portfolio" /></a>
                        <div>{this.props.formValues.portfolioSite}</div>

                    </div>
                    <button type="button" className="blue btn-flat white-text" onClick={this.props.onEditProfile}>
                        Edit Profile
                    </button>
                </div>
                <hr/>
                <div>
                    < ProjectList />
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


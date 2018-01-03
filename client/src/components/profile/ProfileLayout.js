import React, { Component } from 'react';
import ProfileForm from './ProfileForm';
import ProfileInfo from './ProfileInfo';

class ProfileLayout extends Component {

    state = {
        profileDisplay: false
    }

    renderContent() {
        if (this.state.profileDisplay) {
            return <ProfileInfo />
        }
        return <ProfileForm
            onProfileSubmit={() => this.setState({profileDisplay: true})}
        />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
            );
    }
}

export default ProfileLayout;
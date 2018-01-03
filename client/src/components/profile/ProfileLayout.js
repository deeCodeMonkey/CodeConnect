import React, { Component } from 'react';
import ProfileForm from './ProfileForm';
import ProfileInfo from './ProfileInfo';

class ProfileLayout extends Component {

    state = {
        profileDisplay: true
    }

    renderContent() {
        if (this.state.profileDisplay) {
            return <ProfileInfo 
                onEditProfile={() => this.setState({profileDisplay: false})}
                />
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
import React, { Component } from 'react';
import LandingModal from './LandingModal';
import "./Landing.css"


class Landing extends Component {

    state = {
        modalStatus: false
    }

    modalOpen = () => {
        this.setState({
            modalStatus: true
        });
    }

    modalClose = () => {
        this.setState({
            modalStatus: false
        });
    }

    render() {

        return (
            <div >
                <div className="row" id="full-screen">
                    <div className="center-align landing-content">

                        <h3 className="center-align code-create-network">Code. Create. Network.</h3>

                        <button className="btn modal-trigger" onClick={this.modalOpen}>Learn More</button>
                    </div>

                    <LandingModal closeModal={this.modalClose} selectModal={this.state.modalStatus} />
                </div>
            </div>
        );
    }
};

export default Landing;
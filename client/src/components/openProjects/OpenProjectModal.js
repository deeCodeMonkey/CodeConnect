import "./OpenProjectModal.css";
import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import OpenProjectProfile from './OpenProjectProfile';

class OpenProjectModal extends Component {

    onClickHandler = () => {
        this.props.assignProjectToUser(this.props.auth._id, this.props.projectId, this.props.closeModal);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.projectModal}
                ariaHideApp={false}
                contentLabel="Open Project Modal">
                <div id="open-project-modal">

                    <div id="open-project-modal-title" className="valign-wrapper heading">
                        <h3>PROJECT DETAIL</h3>
                    </div>

                    <div id="open-project-desc">
                        <OpenProjectProfile projectId={this.props.projectId}/>
                        <button className="btn add-project-button" onClick={this.onClickHandler}>Add Project to User</button>
                        <button className="btn" id="close-project-modal" onClick={this.props.closeModal}>CLOSE</button>
                    </div>
                </div>
            </Modal>
        );
    }
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        openProject: state.openProject
    };
}

export default connect(mapStateToProps, actions)(OpenProjectModal);
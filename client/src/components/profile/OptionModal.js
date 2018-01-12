import "./OptionModal.css";
import React from 'react';
import Modal from 'react-modal';
import ProfileForm from './ProfileForm';

const OptionModal = (props) => {
    return(
        <Modal
            isOpen={!props.selectModal}
            ariaHideApp={false}
            contentLabel="Edit Profile Modal">

            <div id="edit-profile-modal-title" className="valign-wrapper heading">
                    <h3>EDIT YOUR PROFILE</h3>
                </div>
            <div id="edit-profile-modal">

                

                <ProfileForm onProfileSubmit={props.onProfileSubmit} />
            </div>
        </Modal>
    );
};

export default OptionModal;
import React from 'react';
import Modal from 'react-modal';
import OpenProjectProfile from './OpenProjectProfile';

const OpenProjectModal = (props) => {

    return (
        <Modal
            isOpen={props.projectModal}
            ariaHideApp={false}
            contentLabel="Open Project Modal">
            <h1>Project Modal Content</h1>
            <OpenProjectProfile projectId={props.projectId}/>
            <button onClick={props.closeModal}>Close</button>
        </Modal>
    );
};

export default OpenProjectModal;
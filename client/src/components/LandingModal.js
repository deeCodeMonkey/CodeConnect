import "./LandingModal.css";
import React from 'react';
import Modal from 'react-modal';

const LandingModal = (props) => {
    return (
        <Modal
            isOpen={props.selectModal}
            ariaHideApp={false}
            contentLabel="More Info Modal">

            <div className="row">
                <div className="col sm12">
                    <div className="about-us-modal">

                    <div id="about-us-modal-title" className="valign-wrapper heading">
                        <h2>C&#333;d-Op</h2>
                    </div>

                    <h5>A coding co-op</h5>
                        

                        <p id="p1">You have come to the place where coders unite to learn and help their community. This app connects people all over the globe and allows them to collaborate on website and web app projects. Create an account today and you'll be able to search all of our open projects to find those that appeal to you and your unique talents. You've found crowdsourced coding at it's best!</p>

                        <p id="p2">Cōd-op is a valuable asset for non-profits and entrepreneurial individuals on a limited budget. This app should be especially valuable for those new to coding for a few reasons:</p>

                        <div className="about-us-list">
                            <ol>
                                <li><em>Users can pick and choose the parts of a project they are familiar with and know they can code.</em></li>

                                <li><em>If you are very new to coding, you can search through projects and practice on your own time without actually having to submit your work.</em></li>

                                <li><em>Networking opportunities!! This will be a site solely for coders, developers and web app idea generators. Code and help nonprofits while also building your career network and portfolio.</em></li>
                            </ol>
                        </div>

                        <p id="p3">Stay tuned! Our future improvements may include online coding tutorials and other resources, a networking/chat area, badges for users who’ve reached certain goals and the capability to send/accept payment for services.
                        </p>
                        <div className="center-align">
                        <button className="btn btn-default" onClick={props.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    );
};

export default LandingModal;
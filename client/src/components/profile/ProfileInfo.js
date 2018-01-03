import React from 'react';

const ProfileInfo = () => {
    return (
        <div>
           PROFILE INFO DISPLAY
        </div>
    );
};

export default ProfileInfo; 


//import { connect } from 'react-redux';

//const ProfileInfo = ({ formValues }) => {
//    return (
//        <div>
//            <div>
//                <label>Github</label>
//                <div>{formValues.github}</div>
//            </div>
//            <div>
//                <label>StackOverflow</label>
//                <div>{formValues.stackoverflow}</div>
//            </div>
//            <div>
//                <label>About Me</label>
//                <div>{formValues.aboutme}</div>
//            </div>
//            <div>
//                <label>Skills</label>
//                <div>{formValues.skills}</div>
//            </div>
//        </div>
//    );
//};

//function mapStateToProps(state) {
//    console.log('====',state);
//    return {
//        formValues: state.form.profileForm.values,
//    };
//}

//export default connect(mapStateToProps)(ProfileInfo); 
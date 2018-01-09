import React from 'react';


const Landing = () => {
    return (
        // <div style={{ textAlign: 'center' }}>
        //     <h1>Project Platform App: Code Connect</h1>
        //     This is the External Landing page.
        // </div>

// ask dee how to hide header for the landing view
    <div className="landing-container">
        <div className="row" >
            <h3 className="center-align">Welcome to the C&#333;d-Op</h3>

            <p>You have come to the place where coders unite to learn and help their community. This app connects people all over the globe and allows them to collaborate on website and web app projects. Create an account today and you'll be able to search all of our open projects to find those that appeal to you and your unique talents. You've found crowdsourced coding at it's best!


            Cōd-op is a valuable asset for non-profits and entrepreneurial individuals on a limited budget. This app should be especially valuable for those new to coding for a few reasons:</p>
                
            <ol>
                <li>Users can pick and choose the parts of a project they are familiar with and know they can code.</li>

                 <li>If you are very new to coding, you can search through projects and practice on your own time without actually having to submit your work.</li>

                <li>Networking opportunities!! This will be a site solely for coders, developers and web app idea generators. Code and help nonprofits while also building your career network and portfolio.</li>
            </ol>

            <p>Stay tuned! Our future improvements may include online coding tutorials and other resources, a networking/chat area, badges for users who’ve reached certain goals and the capability to send/accept payment for services.
            </p>
        </div>
    </div>
            
    );
};

export default Landing;
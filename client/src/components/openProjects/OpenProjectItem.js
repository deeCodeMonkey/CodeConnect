import 'materialize-css/dist/css/materialize.min.css';
import "./OpenProjectItem.css"
import React, { Component } from 'react';
import OpenProjectModal from './OpenProjectModal';


class OpenProjectItem extends Component { 

    state = {
        projectModal: undefined,
    }

    handleOnClick = () => {
        this.setState({
            projectModal: true
        });
    }

    closeModalonClick = () => {
        this.setState({
            projectModal: false
        });
        
        window.location.href = "/Main";
    }

    render() {
        return (
            // <div>
            //     <h5>{this.props.title}</h5>
            //     <div>
            //         <img className="project-img circle responsive-img" src={this.props.image} alt="photo" />
            //     </div>
            //     <h6>{this.props.dueDate}</h6>
            //     <h6>{this.props.requirements}</h6>
            //     <button onClick={this.handleOnClick}>View Detail</button>
            //     <OpenProjectModal projectModal={this.state.projectModal} closeModal={this.closeModalonClick} projectId={this.props._id}/>
            // </div>

            
            // tring to put project items into materialize cards for display.
            <div className="col s12 m8 project-item">
                <div className="card-image">
                    <img className="project-img circle responsive-img" src={this.props.image} alt="project image" />
                </div>

                <div className="card-stacked">
                    <div className="card-content">
                        <h6>{this.props.dueDate}</h6>
                        <h6>{this.props.requirements}</h6>
                        <OpenProjectModal projectModal={this.state.projectModal} closeModal={this.closeModalonClick} projectId={this.props._id}/>
                    </div>
                    
                    <div className="card-action">
                        <button onClick={this.handleOnClick}>View Detail</button>
                    </div>
                </div>
            </div>
            
            

            

        );
    }
};

export default OpenProjectItem;


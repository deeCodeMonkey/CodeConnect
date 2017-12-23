import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import logo from '../logo.png';
//import axios from 'axios';

//<a href="/auth/linkedin">Login With LinkedIn</a>
//<img src={logo} className="App-logo" alt="linkedin" />


class Header extends Component {

    //login = () => {
    //    axios.get('/auth/linkedin')
    //        .then((response) => {
    //            console.log(response);;
    //        })
    //        .catch((error) => {
    //            console.log(error);
    //        });
    //}


    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/linkedin">Login With LinkedIn</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/main' : '/'}
                        className="left brand-logo"
                    >Brand
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import uri from '../assets/uri/URI';

import Pay from './Pay';

class Header extends Component {

    renderContentHelper() {

        switch (this.props.auth) {
            case null:
                return null;

            case false:
                return (
                    <li className="z-header-item">
                        <button className="btn">
                            <a href={uri.goggleOAuth}>LogIn with Google</a>
                        </button>
                    </li>
                );

            default:
                return this.props.auth ? (
                    <div>
                       {/* <li className="z-header-items">
                            <Pay credits={this.props.auth.credits}/>
                        </li>*/}
                        {/*<li className="z-header-items">
                            Credits:
                        </li>*/}
                        <li className="z-header-item">
                                <a href={uri.logout}>Logout</a>
                        </li>
                        <li className="z-header-item">
                            <a href="#">Hallo, <strong>{JSON.parse(this.props.auth.name)['familyName']}</strong></a>
                        </li>
                    </div>
                ) : null

        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? uri.units : '/'}
                        className="left brand-logo logo z-header-item"
                    >
                        Manic Mechanic
                    </Link>
                    <div className="container z-header-container right">
                        <ul className="right">
                            {this.renderContentHelper()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);
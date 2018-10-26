import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Pay from './Pay';

class Header extends Component {

    renderContentHelper() {

        switch (this.props.auth) {
            case null:
                return null;

            case false:
                return (
                    <li className="z-header-items">
                        <button className="btn">
                            <a href="/auth/google">LogIn with Google</a>
                        </button>
                    </li>
                );

            default:
                return this.props.auth ? (
                    <div>
                        <li className="z-header-items">
                            <Pay credits={this.props.auth.credits}/>
                        </li>
                        {/*<li className="z-header-items">
                            Credits:
                        </li>*/}
                        <li className="z-header-items">
                                <a href="/api/logout">Logout</a>
                        </li>
                        <li className="z-header-items">
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
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo z-header-items"
                    >
                        Manic Mechanic
                    </Link>
                    <div className="container">
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
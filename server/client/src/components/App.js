import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import '../assets/styles/app.css';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import UnitNew from './units/UnitNew';
import {connect} from 'react-redux';
import * as actions from '../actions';


const Thanks = () =>
    <h1>payment is done!</h1>;




class App extends React.Component {

    componentDidMount() {

        this.props.fetchUserAction();
    }

    render() {
        //const {surveys, surveysNew, logout, goggleOAuth, currentUser} = this.props;
        return (
            <div >
                <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <Route exact path="/units" component={Dashboard}/>
                        <Route exact path="/units/new" component={UnitNew}/>
                        <Route path="/surveys/thanks" component={Thanks}/>
                        <Route exact path="/" component={Landing}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};


export default connect(null, actions)(App);
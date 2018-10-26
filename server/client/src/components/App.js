import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import '../assets/styles/app.css';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import {connect} from 'react-redux';
import * as actions from '../actions';


const Survey = () =>
    <h1>survey</h1>;
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
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route exact path="/surveys/new" component={SurveyNew}/>
                        <Route path="/surveys/thanks" component={Thanks}/>
                        <Route exact path="/" component={Landing}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};


export default connect(null, actions)(App);
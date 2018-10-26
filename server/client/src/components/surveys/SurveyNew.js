import React, {Component} from 'react';
import SurveyForm from "./SurveyForm";


class SurveyNew extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h1 className="right-align">NewSurvey</h1>
                </div>
                <SurveyForm/>
            </div>
        );
    };
}

export default SurveyNew;
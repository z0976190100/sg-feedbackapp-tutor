import React, {Component} from 'react';
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import {reduxForm} from 'redux-form';


class SurveyNew extends Component {
    state =
        {
            showFormReview: false
        };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <SurveyFormReview
                    onCancel={() => {
                        this.setState(
                            {
                                showFormReview: false
                            }
                        );
                    }
                    }
                />
            );
        } else {
            return (
                <SurveyForm
                    onSurveySubmit={() => {
                        this.setState(
                            {
                                showFormReview: true
                            }
                        )
                    }
                    }
                />
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h4 className="right-align" title="Adding new unit">Register new Mashine Unit</h4>
                </div>
                {this.renderContent()}
            </div>
        );
    };
}

export default reduxForm(
    {
        form: 'surveyForm'
    }
)(SurveyNew);
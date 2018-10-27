import React from 'react';
import {Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {saveForm} from "../../actions";

const SurveyFormReview = ({onCancel, formValues, saveForm}) => {

    return (
        <div>
            <h5>
                Confirm your entries
            </h5>
            <div className="container">

                <button onClick={onCancel} className="teal btn-flat white-text">
                    <i className="material-icons left">chevron_left</i>
                    Back
                </button>
                <button onClick={() => saveForm(formValues)} className="btn-flat teal right white-text">
                    Save
                    <i className="material-icons right">done-all</i>
                </button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return (
        {
            formValues: state.form.surveyForm.values
        }
    );
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
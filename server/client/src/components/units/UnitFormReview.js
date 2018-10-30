import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

const UnitFormReview = (
    {
        onCancel,
        formValues,
        saveForm,
        history
    }
) => {

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
                <button onClick={() => {console.log(formValues); saveForm(formValues, history);}} className="btn-flat teal right white-text">
                    Save
                    <i className="material-icons right">done_all</i>
                </button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return (
        {
            formValues: state.form.unitForm.values
        }
    );
}

export default connect(mapStateToProps, actions)(withRouter(UnitFormReview));
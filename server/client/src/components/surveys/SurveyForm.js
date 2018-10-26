import _ from 'lodash'
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';

// TODO: thy shalt rip off those GREEEN letters, think about variables instead.
const FIELDS = [
    {
        label: 'Survey Title',
        name: 'title'
    },
    {
        label: 'Subject Line',
        name: 'subject'
    },
    {
        label: 'Email body',
        name: 'emailBody'
    },
    {
        label: 'Recipients List',
        name: 'recipients'
    }
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return (
                <Field
                    key={name}
                    component={SurveyField}
                    type="text"
                    label={label}
                    name={name}

                />
            );
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys">
                        <button className="teal btn-flat white-text">
                            <i className="material-icons left">chevron_left</i>
                            Back
                        </button>
                    </Link>
                    <button type="submit" className="btn-flat teal right white-text">
                        Next
                        <i className="material-icons right">chevron_right</i>
                    </button>
                </form>
            </div>
        );
    };
}

// redux-form consumes this one automaticaly
function validate(values) {
    const errors = {};

    _.each(FIELDS, ({name}) => {
        if(!values[name]){
            errors[name] = `This field shouldn't be empty!`
        }

    });



    return errors;
}

export default reduxForm(
    {
        validate,
        form: 'surveyForm'
    }
)(SurveyForm);
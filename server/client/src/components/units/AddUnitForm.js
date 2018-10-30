import _ from 'lodash'
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import CustomFormField from './CustomFormField';
import FIELDS from '../../assets/formFields/formFields';
import uri from '../../assets/uri/URI';

// TODO: thy shalt rip off those GREEEN letters, think about variables instead.
// TODO: FIELDS is not a constant, man

class AddUnitForm extends Component {

    renderFieldsHelper() {
        return _.map(FIELDS, ({label, name}) => {
            return (

                <div className="col s6">
                    <Field
                        key={name}
                        component={CustomFormField}
                        type="text"
                        label={label}
                        name={name}

                    />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(this.props.onUnitSubmit)}>
                    <div className="row">
                        {this.renderFieldsHelper()}
                    </div>
                    <Link to={uri.units}>
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
        if (!values[name]) {
            errors[name] = `This field shouldn't be empty!`
        }

    });

    return errors;
}

export default reduxForm(
    {
        validate,
        form: 'unitForm',
        destroyOnUnmount: false
    }
)(AddUnitForm);
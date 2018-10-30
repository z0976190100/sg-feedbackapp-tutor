import React, {Component} from 'react';
import AddUnitForm from "./AddUnitForm";
import UnitFormReview from "./UnitFormReview";
import {reduxForm} from 'redux-form';


class UnitNew extends Component {
    state =
        {
            showFormReview: false
        };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <UnitFormReview
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
                <AddUnitForm
                    onUnitSubmit={() => {
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
            <div>
                <div className="container z-container-title">
                    <h4 className="right" title="Adding new unit">Register new Mashine Unit</h4>
                </div>
                <div className="container">
                    {this.renderContent()}
                </div>
            </div>
        );
    };
}

export default reduxForm(
    {
        form: 'unitForm'
    }
)(UnitNew);
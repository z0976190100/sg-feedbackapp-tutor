import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Pay extends Component {



    render() {
        return (
            <StripeCheckout
                name="Get ON Manic!"
                description="5 more manic for $5!"
                amount={500}
                token=
                    {
                        token => {
                            this.props.handleToken(token);
                        }
                    }
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn" title="1 credit = $1">
                    Credits: {this.props.credits || "0"}
                </button>
            </StripeCheckout>
        )
    }

}

export default connect(null, actions)(Pay);
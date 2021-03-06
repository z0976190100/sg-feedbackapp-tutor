const keys = require('../config/k');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

    app.post(
        '/api/stripe', requireLogin,  async (req, res) => {

            //creating object for stripe API
            const charge = await stripe.charges.create(
                {
                    amount: 500,
                    currency: 'usd',
                    description: '$5',
                    source: req.body.id
                }
            );
            req.user.credits += 5;
            const user = await req.user.save();

            res.send(user);
        }
    );
};